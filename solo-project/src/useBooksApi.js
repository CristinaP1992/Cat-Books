export function useBooksApi() {
  const USER_BOOKS_API = 'http://localhost:8000';

  const getBooks = async () => {
    const response = await fetch(USER_BOOKS_API + '/books');

    const books = await response.json();
    return books;
  };

  const putUserBook = async (bookId, userBook) => {
    const response = await fetch(USER_BOOKS_API + '/books/' + bookId, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(userBook),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseBook = await response.json();
    return responseBook;
  };

  return { getBooks, putUserBook };
}
