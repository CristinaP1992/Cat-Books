export function useBooksApi() {
  const USER_BOOKS_API = 'http://localhost:8000';

  const getBooksByCategory = async (category = 'cats') => {
    const response = await fetch(USER_BOOKS_API + '/books/' + category);
    const books = await response.json();
    return books;
  };

  const putUserBook = async (bookId, book) => {
    const response = await fetch(USER_BOOKS_API + '/books/' + bookId, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseBook = await response.json();
    return responseBook;
  };

  return { putUserBook, getBooksByCategory };
}
