require('dotenv').config()
const path = require('path');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const URI = process.env.DB_URI;

const app = express();

const BookModel = require('./models/Book');

app.use(express.json());

mongoose.Promise = global.Promise;
mongoose
  .connect(URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(process.env.DB_PORT, () => console.log(`Server and Database running on ${process.env.DB_PORT}, http://localhost:${process.env.DB_PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Add headers
app.use(express.static('public'));  
app.use('/images', express.static('images'));

const allowedOrigins = ['http://localhost:3000', 'mongodb://127.0.0.1:27017', 'http://localhost:8080'];
app.use(
    cors({
        origin: function(origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg =
                    "The CORS policy for this site does not " +
                    "allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        }
    })
);

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

app.get("/", async (req, res) => {
  BookModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  })
});

app.post("/create", async (req, res) => {
  const bookTitle = req.body.title;
  const bookAuthor = req.body.author;
  const bookDescription = req.body.description;
  const bookImage = req.body.image;

  const book = new BookModel({ title: bookTitle, author: bookAuthor, description: bookDescription, image: bookImage });

  try {
    await book.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));