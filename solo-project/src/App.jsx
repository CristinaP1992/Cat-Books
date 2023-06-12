import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { Welcome_Page } from './components/Welcome_Page/Welcome_Page';
import { Navbar } from './components/Navbar/Navbar';
import { Discover } from './components/Discover/Discover';
import { MyBooks } from './components/BookList/MyBooks/MyBooks';
import { Search } from './components/Search/Search';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome_Page />} />
          <Route path="/discover/:category?" element={<Discover />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
