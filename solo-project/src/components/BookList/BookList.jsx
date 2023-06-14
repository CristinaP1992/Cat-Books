import { BookItem } from './BookItem/BookItem';
import cl from './BookList.module.css';

export const BookList = ({ books, updateUserBook }) => {
  return (
    <div className={cl.booklist}>
      {books.map((book) => {
        return (
          <BookItem key={book.id} book={book} updateUserBook={updateUserBook} />
        );
      })}
    </div>
  );
};
