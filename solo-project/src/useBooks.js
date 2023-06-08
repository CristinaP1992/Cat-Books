import { useEffect, useState } from 'react';
import { useBooksApi } from './useBooksApi';

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const { getBooks, putUserBook } = useBooksApi();

  const toggleUserBook = (bookId, property) => {
    let userBook = null;
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        const updatedBook = {
          ...book,
          userBook: { ...book.userBook, [property]: !book.userBook[property] },
        };
        userBook = updatedBook.userBook;
        return updatedBook;
      }
      return book;
    });
    putUserBook(bookId, userBook);
    setBooks(updatedBooks);
  };

  useEffect(() => {
    getBooks().then((fetchedBooks) => setBooks(fetchedBooks));
  }, []);

  return { books, toggleUserBook };
};
