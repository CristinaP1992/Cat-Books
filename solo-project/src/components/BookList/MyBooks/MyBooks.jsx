import { BookList } from '../BookList';
import cl from './MyBooks.module.css';

export const MyBooks = ({ books, updateUserBook }) => {
  return (
    <>
      <div className={cl.mybooks}>
        <h2>My Books</h2>
      </div>
      <div className={cl.booklist}>
        <div>
          <details>
            <summary>
              {' '}
              <h2>Want to read</h2>{' '}
            </summary>
            <div className={cl.books}>
              <BookList
                books={books.filter(
                  ({ userBook }) => userBook.status === 'toread'
                )}
                updateUserBook={updateUserBook}
              />
            </div>
          </details>
        </div>
        <div>
          <details>
            <summary>
              {' '}
              <h2>Reading now</h2>
            </summary>
            <div className={cl.books}>
              <BookList
                books={books.filter(
                  ({ userBook }) => userBook.status === 'reading'
                )}
                updateUserBook={updateUserBook}
              />
            </div>
          </details>
        </div>
        <div>
          <details>
            <summary>
              {' '}
              <h2>Read</h2>
            </summary>
            <div className={cl.books}>
              <BookList
                books={books.filter(
                  ({ userBook }) => userBook.status === 'read'
                )}
                updateUserBook={updateUserBook}
              />
            </div>
          </details>
        </div>
      </div>
    </>
  );
};
