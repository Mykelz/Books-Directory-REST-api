const express = require('express');

const bookController = require('../controllers/books.js');


const router = express.Router();


router.get('/books', bookController.getBooks);

router.post('/book', bookController.postBook);

router.put('/book/:bookId');

router.delete('/book/:bookId')


module.exports = router;