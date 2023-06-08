import { BookList } from '../BookList/BookList';

export const Discover = ({ books, toggleUserBook }) => {
  return (
    <>
      <h2>Books for you</h2>
      <BookList books={books} toggleUserBook={toggleUserBook} />
    </>
  );
};
