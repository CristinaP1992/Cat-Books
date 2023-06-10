import cl from './BookItem.module.css';

export const BookItem = ({ book, updateUserBook }) => {
  return (
    <div className={cl.book}>
      <div className={cl.icons}>
        <div>
          <img className={cl.cover} src={book.thumbnail} alt="" />
        </div>
        <div className={cl.icons2}>
          {book.status === 'toread' ? (
            <div onClick={() => updateUserBook(book.id, 'toread')}>
              <img src="./toread2.png" alt="" />
            </div>
          ) : (
            <div onClick={() => updateUserBook(book.id, 'toread')}>
              <img src="./addbook.png" alt="" />
            </div>
          )}
          {book.status === 'reading' ? (
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
          {book.status === 'read' ? (
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
