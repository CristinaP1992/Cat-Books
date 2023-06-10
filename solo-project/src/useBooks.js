import { useState } from 'react';
import { useBooksApi } from './useBooksApi';

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const { getBooksByCategory, putUserBook } = useBooksApi();

  const updateUserBook = (bookId, status) => {
    let updatedBook;

    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        updatedBook = {
          ...book,
          status,
        };
        return updatedBook;
      }
      return book;
    });

    putUserBook(bookId, updatedBook);
    setBooks(updatedBooks);
  };

  const fetchBooksByCategory = (query) => {
    getBooksByCategory(query).then((fetchedBooks) => setBooks(fetchedBooks));
  };

  return { books, updateUserBook, fetchBooksByCategory };
};
