import { BookItem } from './BookItem/BookItem';

export const BookList = ({ books, updateUserBook }) => {
  return (
    <>
      {books.map((book) => {
        return (
          <BookItem key={book.id} book={book} updateUserBook={updateUserBook} />
        );
      })}
    </>
  );
};
