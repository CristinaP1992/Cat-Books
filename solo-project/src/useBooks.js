import { useEffect, useState } from 'react';
import { useBooksApi } from './useBooksApi';

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const { getBooks } = useBooksApi();

  const toggleUserBook = (bookId, property) => {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return {
          ...book,
          userBook: { ...book.userBook, [property]: !book.userBook[property] },
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  useEffect(() => {
    getBooks().then((fetchedBooks) => setBooks(fetchedBooks));
  }, []);

  return { books, toggleUserBook };
};
