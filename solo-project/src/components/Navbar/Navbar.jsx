import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={cl.nav}>
      <div className={cl.menu}>
        <NavLink to="/discover/cats">
          <img className={cl.book} src="/book.svg" alt="" />
        </NavLink>
      </div>
      <div className={cl.menu}>
        <NavLink to="/mybooks">
          <img src="/heart.svg" alt="" />
        </NavLink>
      </div>
      <div className={cl.menu}>
        <NavLink to="/search">
          <img src="/search.svg" alt="" />
        </NavLink>
      </div>
      <div className={cl.menu}>
        <NavLink to="/myprofile">
          <img className={cl.cat} src="/cat.svg" alt="" />
        </NavLink>
      </div>
    </nav>
  );
};
