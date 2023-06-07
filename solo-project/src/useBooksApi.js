export function useBooksApi() {
  const url =
    'https://www.googleapis.com/books/v1/volumes?q=cats&projection=lite&key=AIzaSyBC_FShqjkK3mvF6I5qv4zF9x5J9ivIUDQ&fbclid=IwAR3Y5bDI6hThrL9jyHfSplHdxvRX0q7Xi7eWwNsvC0TfBy_EpebsthIcjS8';

  const getBooks = async () => {
    const response = await fetch(url);
    const json = await response.json();
    return json.items.map((item) => ({ ...item.volumeInfo, id: item.id }));
  };

  return { getBooks };
}
