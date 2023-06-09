import cl from './Welcome_Page.module.css';

export const Welcome_Page = () => {
  return (
    <div className={cl.welcome_page}>
      <div className={cl.moto}>
        <h2>
          <span style={{ color: 'green' }}>Read.</span>{' '}
          <span style={{ color: '#f7a76c' }}>Plan.</span>
          <span style={{ color: '#FF8FB1' }}> Enjoy</span>
        </h2>
      </div>
      <div className={cl.image}>
        <img src="/main.jpg" alt="cat-picture" />
      </div>
      <div className={cl.greeting}>
        <h2>
          Welcome back, <span style={{ color: '#FF8FB1' }}>Cristina</span>{' '}
        </h2>
      </div>
    </div>
  );
};
