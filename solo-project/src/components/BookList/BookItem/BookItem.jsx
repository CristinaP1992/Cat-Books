export const BookItem = ({ book }) => {
  // if (book.imageLinks === undefined) {
  //   //book.imageLinks.smallThumbnail = '';
  //   return null;
  // }

  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.authors}</h3>
      <p>{book.description}</p>
      {book.readingModes.image ? (
        <div>
          <img src={book.imageLinks.smallThumbnail} alt="" />
        </div>
      ) : null}
    </div>
  );
};
