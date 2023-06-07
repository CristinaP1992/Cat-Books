export function useBooksApi() {
  const url =
    'https://www.googleapis.com/books/v1/volumes?q=cats&projection=lite';

  const getBooks = async () => {
    const response = await fetch(url);
    const json = await response.json();
    return json.items.map((item) => ({ ...item.volumeInfo, id: item.id }));
  };

  return { getBooks };
}
