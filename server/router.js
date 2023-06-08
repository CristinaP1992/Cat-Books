const express = require('express');
const router = express.Router();
const { getBooks, putUserBook } = require('./controller');

router.get('/books', getBooks);
router.put('/books/:id', putUserBook);

module.exports = router;
