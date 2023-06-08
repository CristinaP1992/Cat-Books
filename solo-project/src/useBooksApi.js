export function useBooksApi() {
  const GOOGLE_BOOKS_API =
    'https://www.googleapis.com/books/v1/volumes?q=cats&projection=lite';

  const USER_BOOKS_API = 'http://localhost:8000';

  const getBooks = async () => {
    const [response1, response2] = await Promise.all([
      fetch(GOOGLE_BOOKS_API),
      fetch(USER_BOOKS_API + '/books'),
    ]);
    const googleBooksJson = await response1.json();
    const userBooksJson = await response2.json();
    return googleBooksJson.items.map((googleBook) => {
      const userBook = userBooksJson.find(
        (userBook) => userBook.bookId === googleBook.id
      ) ?? { favorite: false, toread: false, reading: false, read: false };
      return { ...googleBook.volumeInfo, id: googleBook.id, userBook };
    });
  };

  return { getBooks };
}
