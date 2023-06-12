import cl from './Title.module.css';

export const Title = ({ title }) => {
  return (
    <>
      <div className={cl.title}>
        <h2>{title}</h2>
      </div>
      <div className={cl.title_placeholder}></div>
    </>
  );
};
