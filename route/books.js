const express = require('express');

const bookController = require('../controllers/books.js');


const router = express.Router();


router.get('/books', bookController.getBooks);

router.get('/book/:bookId', bookController.getBook)

router.post('/book', bookController.postBook);

router.put('/book/:bookId', bookController.editBook);

router.delete('/book/:bookId', bookController.deleteBook)


module.exports = router;