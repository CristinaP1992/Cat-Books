const express = require('express');
const router = express.Router();
const { getBooks, putUserBook, getBooksByCategory } = require('./controller');

router.get('/books/:category', getBooksByCategory);
router.put('/books/:id', putUserBook);

module.exports = router;
