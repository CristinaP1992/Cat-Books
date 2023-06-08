const Book = require('./model');

const putUserBook = async (req, res) => {
  const { body } = req;
  const userBook = {
    bookId: body.bookId,
    status: body.status,
  };

  try {
    const existBook = await Book.findOneAndUpdate(
      { bookId: req.params.id },
      userBook,
      { upsert: true }
    );
    res.status(201).json(existBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBooks, putUserBook };
