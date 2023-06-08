import cl from './BookItem.module.css';

export const BookItem = ({ book }) => {
  return (
    <div className={cl.book}>
      {book.readingModes.image ? (
        <div>
          <img src={book.imageLinks.smallThumbnail} alt="" />
        </div>
      ) : (
        <div>
          {' '}
          <img src="/cover.jpg" alt="alt-cover" />{' '}
        </div>
      )}
      {/* {book.favorite ? (
        <img className={cl.like} src="/liked.png" alt="liked" />
      ) : (
        <img className={cl.like} src="/like.png" alt="like" />
      )} */}
      {book.toread ? (
        <div className={cl.wanttoread}>Want to read</div>
      ) : (
        <div className={cl.read}>Want to read</div>
      )}
      {book.reading ? (
        <div className={cl.reading}>Reading now</div>
      ) : (
        <div className={cl.reading}>Reading now</div>
      )}
      {book.read ? (
        <div className={cl.completed}>Read</div>
      ) : (
        <div className={cl.complete}>Read</div>
      )}
      <h2>{book.title}</h2>
      <h3>{book.authors}</h3>
      <p className={cl.max_lines}>{book.description}</p>
    </div>
  );
};
