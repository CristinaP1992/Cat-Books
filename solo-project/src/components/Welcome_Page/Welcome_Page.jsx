import cl from './Welcome_Page.module.css';

export const Welcome_Page = ({ text }) => {
  return (
    <div className={cl.welcome_page}>
      <div className={cl.moto}>{text}</div>
      <div className={cl.image}>
        <img src="/main.jpg" alt="cat-picture" />
        {/* <iframe src="https://embed.lottiefiles.com/animation/71763"></iframe> */}
      </div>
      <div>Welcome back, Cristina</div>
    </div>
  );
};
