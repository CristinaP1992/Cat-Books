const express = require('express');
const router = express.Router();
const { getBooks, postBook } = require('./controller');

router.get('/books', getBooks);
router.post('/books', postBook);

module.exports = router;
