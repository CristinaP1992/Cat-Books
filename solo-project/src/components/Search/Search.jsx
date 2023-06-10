import cl from './Search.module.css';

export const Search = () => {
  return (
    <div className={cl.searchbar}>
      <input type="text" placeholder="Add title" required />
    </div>
  );
};
