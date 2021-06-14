const router = require('express').Router()

// define the default route that fetches all of our books
router.get('/api/books', async function (req, res) {
    // data the conserves our API quota for development
    const placeholderData = [
        {
            "_id": "database15911271768852",
            "book": {
                "_id": "database1594127768852",
                "title": "Title 1",
                "author": "Author 1",
                "image": ""
            },
            "_createdOn": "2020-06-02T19:56:08.852Z",
            "_lastModifiedOn": "2020-06-02T19:56:08.852Z"
        },
        {
            "_id": "database1593134992139",
            "book": {
                "_id": "database1591126768852",
                "title": "Title 2",
                "author": "Author 2",
                "image": ""
            },
            "_createdOn": "2020-06-02T21:56:32.139Z",
            "_lastModifiedOn": "2020-06-02T21:56:32.139Z"
        },
        {
            "_id": "database158112776812",
            "book": {
                "_id": "database1561127768852",
                "title": "Title 3",
                "author": "Author 3",
                "image": ""
            },
            "_createdOn": "2020-06-02T19:56:08.852Z",
            "_lastModifiedOn": "2020-06-02T19:56:08.852Z"
        },
        {
            "_id": "database1591132092139",
            "book": {
                "_id": "database1591127268852",
                "title": "Title 4",
                "author": "Author 4",
                "image": ""
            },
            "_createdOn": "2020-06-02T21:56:32.139Z",
            "_lastModifiedOn": "2020-06-02T21:56:32.139Z"
        },
        {
            "_id": "database1591127563852",
            "book": {
                "_id": "database1591126768852",
                "title": "Title 5",
                "author": "Author 5",
                "image": ""
            },
            "_createdOn": "2020-06-02T19:56:08.852Z",
            "_lastModifiedOn": "2020-06-02T19:56:08.852Z"
        },
        {
            "_id": "database1591134996139",
            "book": {
                "_id": "database1581127768852",
                "title": "Title 6",
                "author": "Author 6",
                "image": ""
            },
            "_createdOn": "2020-06-02T21:56:32.139Z",
            "_lastModifiedOn": "2020-06-02T21:56:32.139Z"
        },
        {
            "_id": "database1591227763852",
            "book": {
                "_id": "database1596127768852",
                "title": "Title 7",
                "author": "Author 7",
                "image": ""
            },
            "_createdOn": "2020-06-02T19:56:08.852Z",
            "_lastModifiedOn": "2020-06-02T19:56:08.852Z"
        },
        {
            "_id": "database1591464992139",
            "book": {
                "_id": "database1591127768852",
                "title": "Title 8",
                "author": "Author 8",
                "image": ""
            },
            "_createdOn": "2020-06-02T21:56:32.139Z",
            "_lastModifiedOn": "2020-06-02T21:56:32.139Z"
        },
        {
            "_id": "database1591117768852",
            "book": [{
                "_id": "database1591127778852",
                "title": "Title 9",
                "author": "Author 9",
                "image": ""
            }],
            "_createdOn": "2020-06-02T19:56:08.852Z",
            "_lastModifiedOn": "2020-06-02T19:56:08.852Z"
        },
        {
            "_id": "database1591194992139",
            "book": {
                "_id": "database159111768852",
                "title": "Title 10",
                "author": "Author 10",
                "image": ""
            },
            "_createdOn": "2020-06-02T21:56:32.139Z",
            "_lastModifiedOn": "2020-06-02T21:56:32.139Z"
        }
    ]

    try {
        res.json(placeholderData)
    } catch (e) {
        console.log(e)
        res.status(500).send('Error.')
    }
})

router.post('/api/books/add', async function (req, res) {
    const { book } = req.body

    const data = {
        book
    }

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

module.exports = router