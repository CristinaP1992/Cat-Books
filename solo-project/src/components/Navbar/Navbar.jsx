import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css';

export const Navbar = () => {
  const getActive = ({ isActive }) => (isActive ? cl.active : cl.menu);

  return (
    <nav className={cl.nav}>
      <div className={cl.menu}>
        <NavLink to="/discover" className={getActive}>
          Discover
        </NavLink>
      </div>
      <div className={cl.menu}>
        <NavLink to="/mybooks" className={getActive}>
          My Books
        </NavLink>
      </div>
      <div className={cl.menu}>
        <NavLink to="/search" className={getActive}>
          Search
        </NavLink>
      </div>
      <div className={cl.menu}>
        <NavLink to="/profile" className={getActive}>
          Profile
        </NavLink>
      </div>
    </nav>
  );
};
