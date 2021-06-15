const express = require('express');
const cors = require('cors');
// const booksRouter = require('./routes/books')

require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 3001;

// Data the conserves our API quota for development
const placeholderData = [
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

// Add headers
const allowedOrigins = 'http://localhost:3000';

app.use(express.json());

app.use(express.static('public'));  
app.use('/images', express.static('images')); 

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

// app.use('/', booksRouter);

// define the default route that fetches all of our books
app.get('/api/books', async function (req, res) {
    console.log(req.hostname)

    try {
        res.json(placeholderData)
    } catch (e) {
        console.log(e)
        res.status(500).send('Error.')
    }
})

app.post('/api/books/add', async function (req, res) {
    const { book } = req.body
    const data = { book }
    console.log(data)

    try {
        res.json({
            message: 'Book added'
        })
    } catch (e) {
        console.log(e)
        res.status(500).send("Error.")
    }
})

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));