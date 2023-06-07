import { BookItem } from './BookItem/BookItem';

export const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => {
        return <BookItem key={book.id} book={book} />;
      })}
    </>
  );
};
