const express = require('express');

const router = express.Router();


router.get('/books');

router.post('book');

router.put('book/:bookId');

router.delete('book/:bookId')


module.exports = router;