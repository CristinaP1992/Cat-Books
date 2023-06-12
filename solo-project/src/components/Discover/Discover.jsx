import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { BookList } from '../BookList/BookList';
import cl from './Discover.module.css';
import { useBooks } from '../../useBooks';

export const Discover = () => {
  const { books, updateUserBook, fetchBooksByCategory } = useBooks();
  const { category } = useParams();

  const getActive = ({ isActive }) => (isActive ? cl.active : cl.item);

  useEffect(() => {
    fetchBooksByCategory(category);
  }, [category]);

  return (
    <>
      <div className={cl.books}>
        <h2>Books for you</h2>
      </div>
      <div className={cl.category}>
        <div className={cl.item}>
          <NavLink to="/discover/cats" className={getActive}>
            Cats
          </NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/discover/fiction" className={getActive}>
            Fiction
          </NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/discover/detective" className={getActive}>
            Detective
          </NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/discover/fantasy" className={getActive}>
            Fantasy
          </NavLink>
        </div>
      </div>
      <div className={cl.booklist}>
        <BookList books={books} updateUserBook={updateUserBook} />
      </div>
    </>
  );
};
