import { useState } from 'react';
import { useBooks } from '../../useBooks';
import { BookList } from '../BookList/BookList';
import { Title } from '../Title';
import cl from './Search.module.css';

export const Search = () => {
  const [title, setTitle] = useState('');
  const { books, fetchBooksByCategory, updateUserBook } = useBooks();

  const onSubmit = (e) => {
    e.preventDefault();
    fetchBooksByCategory(title);
  };

  return (
    <>
      <Title title="Search" />
      <div className={cl.container}>
        <form onSubmit={onSubmit}>
          <input
            value={title}
            type="text"
            placeholder="Add a title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <button>Go</button>
        </form>
        <BookList books={books} updateUserBook={updateUserBook} />
      </div>
    </>
  );
};
