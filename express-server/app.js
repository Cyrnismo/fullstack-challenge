require('dotenv').config()
const path = require('path');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require("mongodb").MongoClient;
const adminRoute = require('./routes/admin');

const app = express();

const PORT = process.env.PORT || 3001;

const uri = "mongodb+srv://dev69:!ucYmongodb!@cluster0.0dive.mongodb.net/books?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("books").collection("shelf");
    // perform actions on the collection object
    client.close();
  });

app.set('view engine', 'ejs');
app.set('views', './src/pages');

app.use(express.urlencoded({ extended: false }));

// Data the conserves our API quota for development
let placeholderData = [
    {
        "_id": "database15911271768852",
        "book": {
            "_id": "database1594127768852",
            "title": "Erva do Diabo",
            "author": "Eduardo Castaneda",
            "image": "http://localhost:3001/images/carlos_castaneda_erva_do_diabo.jpg"
        },
        "_createdOn": "2020-06-02T19:56:08.852Z",
        "_lastModifiedOn": "2020-06-02T19:56:08.852Z"
    },
    {
        "_id": "database1593134992139",
        "book": {
            "_id": "database1591126768852",
            "title": "Complete Poems",
            "author": "Edward Cummings",
            "image": "http://localhost:3001/images/edward_cummings_complete_poems.jpg"
        },
        "_createdOn": "2020-06-02T21:56:32.139Z",
        "_lastModifiedOn": "2020-06-02T21:56:32.139Z"
    },
    {
        "_id": "database158112776812",
        "book": {
            "_id": "database1561127768852",
            "title": "Brave New World",
            "author": "George Orwell",
            "image": "http://localhost:3001/images/george_orwell_brave_new_world.jpg"
        },
        "_createdOn": "2020-06-02T19:56:08.852Z",
        "_lastModifiedOn": "2020-06-02T19:56:08.852Z"
    },
    {
        "_id": "database1591132092139",
        "book": {
            "_id": "database1591127268852",
            "title": "On The Road",
            "author": "Jack Korouac",
            "image": "http://localhost:3001/images/jack_kerouac_on_the_road.jpg"
        },
        "_createdOn": "2020-06-02T21:56:32.139Z",
        "_lastModifiedOn": "2020-06-02T21:56:32.139Z"
    },
    {
        "_id": "database1591127563852",
        "book": {
            "_id": "database1591126768852",
            "title": "A Metamorfose",
            "author": "Kafka",
            "image": "http://localhost:3001/images/kafka_a_metamorfose.jpg"
        },
        "_createdOn": "2020-06-02T19:56:08.852Z",
        "_lastModifiedOn": "2020-06-02T19:56:08.852Z"
    },
    {
        "_id": "database1591134996139",
        "book": {
            "_id": "database1581127768852",
            "title": "Farenheit 451",
            "author": "Ray Bradbury",
            "image": "http://localhost:3001/images/ray_bradbury_fahrenheit_451.jpg"
        },
        "_createdOn": "2020-06-02T21:56:32.139Z",
        "_lastModifiedOn": "2020-06-02T21:56:32.139Z"
    },
    {
        "_id": "database1591227763852",
        "book": {
            "_id": "database1596127768852",
            "title": "Walden: Life In The Woods",
            "author": "H. D. Thoreau",
            "image": "http://localhost:3001/images/thoreau_walden_life_in_the_woods.jpg"
        },
        "_createdOn": "2020-06-02T19:56:08.852Z",
        "_lastModifiedOn": "2020-06-02T19:56:08.852Z"
    },
    {
        "_id": "database1591464992139",
        "book": {
            "_id": "database1591127768852",
            "title": "Baudolino",
            "author": "Umberto Eco",
            "image": "http://localhost:3001/images/umberto_eco_baudolino.jpg"
        },
        "_createdOn": "2020-06-02T21:56:32.139Z",
        "_lastModifiedOn": "2020-06-02T21:56:32.139Z"
    }
]

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