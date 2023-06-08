import { BookList } from '../BookList/BookList';

export const Discover = ({ books, updateUserBook }) => {
  return (
    <>
      <h2>Books for you</h2>
      <BookList books={books} updateUserBook={updateUserBook} />
    </>
  );
};
