import { useEffect } from 'react';
import { BookList } from '../BookList';
import { Title } from '../../Title';
import cl from './MyBooks.module.css';
import { useBooks } from '../../../useBooks';

export const MyBooks = () => {
  const { books, updateUserBook, fetchUserBooks } = useBooks();

  const booksToRead = books.filter((book) => book.status === 'toread');
  const booksReading = books.filter((book) => book.status === 'reading');
  const booksRead = books.filter((book) => book.status === 'read');

  useEffect(() => {
    fetchUserBooks();
  }, []);

  return (
    <>
      <Title title="MyBooks" />
      <div className={cl.list}>
        <div className={cl.booklist}>
          <details>
            <summary>
              {' '}
              <div className={cl.books_button}>
                <h2>Want to reads </h2>{' '}
                <span style={{ color: 'green' }}>{booksToRead.length}</span>
              </div>
            </summary>
            <div>
              <BookList books={booksToRead} updateUserBook={updateUserBook} />
            </div>
          </details>
        </div>
        <div>
          <details>
            <summary>
              {' '}
              <div className={cl.books_button}>
                <h2>Reading now</h2>
                <span style={{ color: 'green' }}>{booksReading.length}</span>
              </div>
            </summary>
            <div>
              <BookList books={booksReading} updateUserBook={updateUserBook} />
            </div>
          </details>
        </div>
        <div>
          <details>
            <summary>
              {' '}
              <div className={cl.books_button}>
                <h2>Read</h2>
                <span style={{ color: 'green' }}>{booksRead.length}</span>
              </div>
            </summary>
            <div>
              <BookList books={booksRead} updateUserBook={updateUserBook} />
            </div>
          </details>
        </div>
      </div>
    </>
  );
};
