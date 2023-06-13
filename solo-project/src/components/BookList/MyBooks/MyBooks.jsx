import { useEffect } from 'react';
import { BookList } from '../BookList';
import { Title } from '../../Title';
import cl from './MyBooks.module.css';
import { useBooks } from '../../../useBooks';

export const MyBooks = () => {
  const { updateUserBook, fetchUserBooks, selectBooksByStatus } = useBooks();

  const booksToRead = selectBooksByStatus('toread');
  const booksReading = selectBooksByStatus('reading');
  const booksRead = selectBooksByStatus('read');

  useEffect(() => {
    fetchUserBooks();
  }, []);

  return (
    <>
      <Title title="My Bookshelf" />
      <div className={cl.list}>
        <div className={cl.booklist}>
          <details>
            <summary>
              {' '}
              <div className={cl.books_button}>
                <h2>Want to read </h2> <span>{booksToRead.length}</span>
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
                <span>{booksReading.length}</span>
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
                <span>{booksRead.length}</span>
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
