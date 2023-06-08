import cl from './BookItem.module.css';

export const BookItem = ({ book, toggleUserBook }) => {
  const { userBook } = book;
  return (
    <div className={cl.book}>
      <div className={cl.icons}>
        {book.readingModes.image ? (
          <div>
            <img src={book.imageLinks.smallThumbnail} alt="" />
          </div>
        ) : (
          <div>
            <img src="/cover.jpg" alt="alt-cover" />
          </div>
        )}
        {userBook.favorite ? (
          <img
            className={cl.like}
            src="/liked.png"
            alt="liked"
            onClick={() => toggleUserBook(book.id, 'favorite')}
          />
        ) : (
          <img
            className={cl.like}
            src="/like.png"
            alt="like"
            onClick={() => toggleUserBook(book.id, 'favorite')}
          />
        )}
        {userBook.toread ? (
          <div
            className={cl.wanttoread}
            onClick={() => toggleUserBook(book.id, 'toread')}
          >
            Want to read
          </div>
        ) : (
          <div
            className={cl.read}
            onClick={() => toggleUserBook(book.id, 'toread')}
          >
            Want to read
          </div>
        )}
        {userBook.reading ? (
          <div
            className={cl.reading}
            onClick={() => toggleUserBook(book.id, 'reading')}
          >
            Reading now
          </div>
        ) : (
          <div
            className={cl.notreading}
            onClick={() => toggleUserBook(book.id, 'reading')}
          >
            Reading now
          </div>
        )}
        {userBook.read ? (
          <div
            className={cl.completed}
            onClick={() => toggleUserBook(book.id, 'read')}
          >
            Read
          </div>
        ) : (
          <div
            className={cl.complete}
            onClick={() => toggleUserBook(book.id, 'read')}
          >
            Read
          </div>
        )}
      </div>
      <div>
        <h3>{book.title}</h3>
        <h3 style={{ fontWeight: 'normal' }}>{book.authors}</h3>
        <p className={cl.max_lines}>{book.description}</p>
      </div>
    </div>
  );
};
