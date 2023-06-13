const express = require('express');
const router = express.Router();
const {
  getBooksByCategory,
  createOrUpdateUserBook,
  getUserBooks,
} = require('./controller');

router.get('/books/:category', getBooksByCategory);
router.put('/books/:id', createOrUpdateUserBook);
router.get('/user-books', getUserBooks);

module.exports = router;
