import { useEffect } from 'react';
import { BookList } from '../BookList/BookList';
import cl from './Discover.module.css';
import { useBooks } from '../../useBooks';

export const Discover = () => {
  const { books, updateUserBook, fetchBooksByCategory } = useBooks();
  const category = 'cats';

  useEffect(() => {
    fetchBooksByCategory(category);
  }, [category]);

  return (
    <>
      <div className={cl.books}>
        <h2>Books for you</h2>
      </div>
      <div className={cl.booklist}>
        <BookList books={books} updateUserBook={updateUserBook} />
      </div>
    </>
  );
};
