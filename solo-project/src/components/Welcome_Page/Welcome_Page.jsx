import cl from './Welcome_Page.module.css';

export const Welcome_Page = () => {
  return (
    <div className={cl.welcome_page}>
      <div className={cl.moto}>
        <h2>
          <span id={cl.green_color}>Read.</span>{' '}
          <span id={cl.orange_color}>Plan.</span>
          <span className={cl.pink_color}> Enjoy</span>
        </h2>
      </div>
      <div className={cl.image}>
        <img src="/main.jpg" alt="cat-picture" />
      </div>
      <div className={cl.greeting}>
        <h2>
          Welcome back, <span className={cl.pink_color}>Kissa</span>{' '}
        </h2>
      </div>
    </div>
  );
};
