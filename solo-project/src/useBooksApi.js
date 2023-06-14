const VITE_USER_BOOKS_API = import.meta.env.VITE_USER_BOOKS_API;

console.log(VITE_USER_BOOKS_API);

export function useBooksApi() {
  const getBooksByCategory = async (category = 'cats') => {
    const response = await fetch(VITE_USER_BOOKS_API + '/books/' + category);
    const books = await response.json();
    return books;
  };

  const getUserBooks = async () => {
    const response = await fetch(VITE_USER_BOOKS_API + '/user-books/');
    const books = await response.json();
    return books;
  };

  const putUserBook = async (bookId, book) => {
    const response = await fetch(VITE_USER_BOOKS_API + '/books/' + bookId, {
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

  return { getUserBooks, getBooksByCategory, putUserBook };
}
