import { BookList } from '../BookList';
import { Title } from '../../Title';
import cl from './MyBooks.module.css';

export const MyBooks = ({ books, updateUserBook }) => {
  return (
    <>
      <Title title="MyBooks" />
      <div className={cl.list}>
        <div className={cl.booklist}>
          <details>
            <summary>
              {' '}
              <div className={cl.books}>
                <h2>Want to read</h2>{' '}
              </div>
            </summary>
            <div>
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
              <div className={cl.books}>
                <h2>Reading now</h2>
              </div>
            </summary>
            <div>
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
              <div className={cl.books}>
                <h2>Read</h2>
              </div>
            </summary>
            <div>
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
