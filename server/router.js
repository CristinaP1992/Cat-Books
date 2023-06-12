const express = require('express');
const router = express.Router();
const {
  getBooksByCategory,
  putUserBook,
  getUserBooks,
} = require('./controller');

router.get('/books/:category', getBooksByCategory);
router.put('/books/:id', putUserBook);
router.get('/user-books', getUserBooks);

module.exports = router;
