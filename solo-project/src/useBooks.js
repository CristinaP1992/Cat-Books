import { useEffect, useState } from 'react';
import { useBooksApi } from './useBooksApi';

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const { getBooks } = useBooksApi();

  useEffect(() => {
    getBooks().then((fetchedBooks) => setBooks(fetchedBooks));
  }, []);

  return books;
};
