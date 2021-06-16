require('dotenv').config()
const path = require('path');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const adminRoute = require('./routes/admin');
const MongoClient = require("mongodb").MongoClient;

const app = express();

const PORT = process.env.PORT || 3001;

const uri = process.env.DB_HOST;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("books").collection("shelf");
  client.close();
});

app.set('view engine', 'ejs');
app.set('views', './src/pages');

app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Add headers
app.use(express.json());

app.use(express.static('public'));  
app.use('/images', express.static('images')); 

mongoose
  .connect(process.env.DB_HOST, {
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

app.get('/', (req, res) => res.send('Home Route'));

app.use('/', adminRoute);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));