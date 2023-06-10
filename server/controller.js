const Book = require('./model');

const putUserBook = async (req, res) => {
  const { body } = req;
  const book = {
    id: body.id,
    status: body.status,
    title: body.title,
    authors: body.authors,
    description: body.description,
    thumbnail: body.thumbnail,
    infoLink: body.infoLink,
  };

  try {
    const existBook = await Book.findOneAndUpdate({ id: req.params.id }, book, {
      upsert: true,
    });
    res.status(201).json(existBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
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
      // const userBook = userBooksJson.find(
      //   (userBook) => userBook.bookId === googleBook.id
      // ) ?? { status: 'initial' };
      const { volumeInfo } = googleBook;
      return {
        title: volumeInfo.title,
        authors: volumeInfo.authors,
        description: volumeInfo.description,
        thumbnail: volumeInfo.imageLinks?.thumbnail ?? 'cover.jpg',
        infoLink: volumeInfo.infoLink,
        status: 'initial',
        id: googleBook.id,
      };
    });

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { putUserBook, getBooksByCategory };
