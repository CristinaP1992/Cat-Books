import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { useBooks } from './useBooks';
import { Welcome_Page } from './components/Welcome_Page/Welcome_Page';
import { BookList } from './components/BookList/BookList';
import { Navbar } from './components/Navbar/Navbar';

export const App = () => {
  const { books, toggleUserBook } = useBooks();
  console.log(books);
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome_Page text="Read. Plan. Enjoy" />} />
          <Route
            path="/discover"
            element={<BookList books={books} toggleUserBook={toggleUserBook} />}
          />
          <Route
            path="/mybooks"
            element={<BookList books={books} toggleUserBook={toggleUserBook} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
