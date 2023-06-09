import cl from './BookItem.module.css';

export const BookItem = ({ book, updateUserBook }) => {
  const { userBook } = book;
  return (
    <div className={cl.book}>
      <div className={cl.icons}>
        {book.readingModes.image ? (
          <div>
            <img src={book.imageLinks.thumbnail} alt="" />
          </div>
        ) : (
          <div>
            <img className={cl.cover} src="/cover.jpg" alt="alt-cover" />
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
        <div className={cl.icons2}>
          {userBook.status === 'toread' ? (
            <div onClick={() => updateUserBook(book.id, 'toread')}>
              <img src="./toread2.png" alt="" />
            </div>
          ) : (
            <div onClick={() => updateUserBook(book.id, 'toread')}>
              <img src="./addbook.png" alt="" />
            </div>
          )}
          {userBook.status === 'reading' ? (
            <div
              className={cl.reading}
              onClick={() => updateUserBook(book.id, 'reading')}
            >
              <img src="./reading-now2.png" alt="" />
            </div>
          ) : (
            <div
              className={cl.notreading}
              onClick={() => updateUserBook(book.id, 'reading')}
            >
              <img src="./reading2.png" alt="" />
            </div>
          )}
          {userBook.status === 'read' ? (
            <div
              className={cl.completed}
              onClick={() => updateUserBook(book.id, 'read')}
            >
              <img src="./read2.png" alt="" />
            </div>
          ) : (
            <div
              className={cl.complete}
              onClick={() => updateUserBook(book.id, 'read')}
            >
              <img src="./read3.png" alt="" />
            </div>
          )}
        </div>
      </div>
      <div className={cl.description}>
        <h3>{book.title}</h3>
        <h3 style={{ fontWeight: 'normal' }}>{book.authors}</h3>
        <p className={cl.max_lines}>{book.description}</p>
      </div>
    </div>
  );
};
