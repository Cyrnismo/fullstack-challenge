const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getIndex);

router.get('/add-book', adminController.getAddBook);

router.post('/add-book', adminController.postBook);

router.get('/:bookId', adminController.getBook);

module.exports = router;