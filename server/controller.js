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

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

const getBooksByCategory = async (req, res) => {
  try {
    const [response, userBooksJson] = await Promise.all([
      fetch(GOOGLE_BOOKS_API + '?projection=lite&q=' + req.params.category),
      Book.find(),
    ]);
    const googleBooksJson = await response.json();

    const books = googleBooksJson.items.map((googleBook) => {
      const userBook = userBooksJson.find(
        (userBook) => userBook.bookId === googleBook.id
      ) ?? { status: 'initial' };
      return { ...googleBook.volumeInfo, id: googleBook.id, userBook };
    });

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { putUserBook, getBooksByCategory };
