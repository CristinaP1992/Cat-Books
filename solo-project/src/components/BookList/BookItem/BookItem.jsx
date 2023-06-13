import cn from 'classnames';
import cl from './BookItem.module.css';

export const BookItem = ({ book, updateUserBook }) => {
  const getOnClick = (status) => {
    return () => updateUserBook(book.id, status);
  };

  const getActive = (status) => {
    return cn(cl.button, { [cl.active]: book.status === status });
  };

  return (
    <div className={cl.book}>
      <div className={cl.top}>
        <div className={cl.icons}>
          <img className={cl.cover} src={book.thumbnail} alt="" />
        </div>
        <div className={cl.description}>
          <h4>{book.title}</h4>
          <h4 style={{ fontWeight: 'normal' }}>{book.authors}</h4>
          <p className={cl.max_lines}>{book.description}</p>
        </div>
      </div>
      <div className={cl.buttons}>
        <button className={getActive('toread')} onClick={getOnClick('toread')}>
          <img src="/plus.svg" alt="" /> To read
        </button>
        <button
          className={getActive('reading')}
          onClick={getOnClick('reading')}
        >
          <img src="/eye.svg" alt="" /> Reading
        </button>
        <button className={getActive('read')} onClick={getOnClick('read')}>
          <img src="/check.svg" alt="" /> Read
        </button>
      </div>
    </div>
  );
};
