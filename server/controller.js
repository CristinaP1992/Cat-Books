const Book = require('./model');

const postBook = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    authors: req.body.authors,
    imageLink: req.body.imageLink,
    description: req.body.description,
    favorite: req.body.favorite,
    toread: req.body.toread,
    reading: req.body.reading,
    read: req.body.read,
  });
  try {
    const bookToPost = await book.save();
    res.status(201).json(bookToPost);
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

module.exports = { getBooks, postBook };
