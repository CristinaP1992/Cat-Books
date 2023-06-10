import { useState } from 'react';
import { useBooks } from '../../useBooks';
import { BookList } from '../BookList/BookList';
import cl from './Search.module.css';

export const Search = () => {
  const [title, setTitle] = useState('');
  const { books, fetchBooksByCategory, updateUserBook } = useBooks();

  const onSubmit = (e) => {
    e.preventDefault();
    fetchBooksByCategory(title);
  };

  return (
    <div className={cl.container}>
      <div className={cl.header}>
        <h2>Search</h2>
      </div>
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
  );
};
