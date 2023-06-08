import cl from './BookItem.module.css';

export const BookItem = ({ book, updateUserBook }) => {
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
        {/* {userBook.favorite ? (
          <img
            className={cl.like}
            src="/liked.png"
            alt="liked"
            onClick={() => updateUserBook(book.id, 'favorite')}
          />
        ) : (
          <img
            className={cl.like}
            src="/like.png"
            alt="like"
            onClick={() => updateUserBook(book.id, 'favorite')}
          />
        )} */}
        {userBook.status === 'toread' ? (
          <div
            className={cl.wanttoread}
            onClick={() => updateUserBook(book.id, 'toread')}
          >
            Want to read
          </div>
        ) : (
          <div
            className={cl.read}
            onClick={() => updateUserBook(book.id, 'toread')}
          >
            Want to read
          </div>
        )}
        {userBook.status === 'reading' ? (
          <div
            className={cl.reading}
            onClick={() => updateUserBook(book.id, 'reading')}
          >
            Reading now
          </div>
        ) : (
          <div
            className={cl.notreading}
            onClick={() => updateUserBook(book.id, 'reading')}
          >
            Reading now
          </div>
        )}
        {userBook.status === 'read' ? (
          <div
            className={cl.completed}
            onClick={() => updateUserBook(book.id, 'read')}
          >
            Read
          </div>
        ) : (
          <div
            className={cl.complete}
            onClick={() => updateUserBook(book.id, 'read')}
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
