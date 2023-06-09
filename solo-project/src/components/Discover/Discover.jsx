import { BookList } from '../BookList/BookList';
import cl from './Discover.module.css';

export const Discover = ({ books, updateUserBook }) => {
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
