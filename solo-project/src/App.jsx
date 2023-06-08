import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { useBooks } from './useBooks';
import { Welcome_Page } from './components/Welcome_Page/Welcome_Page';
import { Navbar } from './components/Navbar/Navbar';
import { Discover } from './components/Discover/Discover';
import { MyBooks } from './components/BookList/MyBooks/MyBooks';

export const App = () => {
  const { books, updateUserBook } = useBooks();

  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome_Page text="Read. Plan. Enjoy" />} />
          <Route
            path="/discover"
            element={<Discover books={books} updateUserBook={updateUserBook} />}
          />
          <Route
            path="/mybooks"
            element={<MyBooks books={books} updateUserBook={updateUserBook} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
