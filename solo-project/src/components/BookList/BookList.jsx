import { BookItem } from './BookItem/BookItem';

export const BookList = ({ books, toggleUserBook }) => {
  return (
    <>
      {books.map((book) => {
        return (
          <BookItem key={book.id} book={book} toggleUserBook={toggleUserBook} />
        );
      })}
    </>
  );
};
