const Book = require('../models/book');

exports.getIndex = async (req, res) => {
    try {
        const book = await Book.find((books) => res.json(books));
        console.log(book);
        res.status(200).render('index', { book: book });
    } catch (error) {
        console.log(error);
    }
};

exports.getBook = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId, (book) => res.json(book));
    console.log(book);
    res.status(200).render('book', { book: book });
  } catch (error) {
      console.log(error);
  }
};

exports.getAddBook = async (req, res) => {
    res.status(200).render('edit-book');
};

exports.postBook = (req, res) => {
    const book = new Book(req.body);
    book.save().then((book) => {
      res.json(book)
    }).catch(err => {
      res.status(500).send(err.message);
    });
    console.log('Book Added to the database');
    res.status(201).redirect('/');
}