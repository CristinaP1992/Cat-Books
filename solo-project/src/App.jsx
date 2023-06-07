import './App.css';
import { useBooks } from './useBooks';
import { Welcome_Page } from './components/Welcome_Page/Welcome_Page';
import { BookList } from './components/BookList/BookList';

export const App = () => {
  const books = useBooks();
  return (
    <>
      <Welcome_Page text="Read. Plan. Enjoy" />
      <BookList books={books} />
    </>
  );
};
