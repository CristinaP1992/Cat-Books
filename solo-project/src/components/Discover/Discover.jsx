import { useEffect } from 'react';
import cn from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
import { BookList } from '../BookList/BookList';
import cl from './Discover.module.css';
import { useBooks } from '../../useBooks';
import { Title } from '../Title';

export const Discover = () => {
  const { books, updateUserBook, fetchBooksByCategory } = useBooks();
  const { category } = useParams();

  const getActive = ({ isActive }) => {
    return cn(cl.item, { [cl.active]: isActive });
  };

  useEffect(() => {
    fetchBooksByCategory(category);
  }, [category]);

  return (
    <>
      <Title title="Books for you" />
      <div className={cl.category}>
        <NavLink to="/discover/cats" className={getActive}>
          Cats
        </NavLink>

        <NavLink to="/discover/fiction" className={getActive}>
          Fiction
        </NavLink>

        <NavLink to="/discover/detective" className={getActive}>
          Detective
        </NavLink>

        <NavLink to="/discover/fantasy" className={getActive}>
          Fantasy
        </NavLink>
      </div>

      <div className={cl.booklist}>
        <BookList books={books} updateUserBook={updateUserBook} />
      </div>
    </>
  );
};
