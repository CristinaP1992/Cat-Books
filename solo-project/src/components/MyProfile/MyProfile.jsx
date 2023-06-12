import { Title } from '../Title';
import cl from './MyProfile.module.css';
import { PieChart } from 'react-minimal-pie-chart';

export const MyProfile = () => {
  return (
    <>
      <Title title="My Profile" />
      <div className={cl.profile_info}>
        <div className={cl.background}></div>
        <div className={cl.avatar}>
          <img src="/avatar.jpg" alt="avatar" />
          <h2>Kissa</h2>
        </div>
        <div className={cl.info}>
          <h3>Date of birth: 5 December</h3>
          <h3>City: Barcelona</h3>
          <h3>University: Sweet Cats</h3>
          <h3>Faculty: How to take over the world</h3>
        </div>
        <div className={cl.progress}>
          <h2>My Progress</h2>
          <div className={cl.circle_chart}>
            <PieChart
              data={[
                { value: 15, color: '#C13C37' },
                { value: 5, color: '#6A2135' },
                { value: 20, color: '#E38627' },
              ]}
            />
            <div className={cl.chart}>
              <h3>
                <img src="/book.svg" alt="" /> Want to read
              </h3>
              <h3>
                <img src="/book2.svg" alt="" /> Reading now
              </h3>
              <h3>
                <img src="/book3.svg" alt="" /> Read
              </h3>
              {/* <p className={cl.date}>2023</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
