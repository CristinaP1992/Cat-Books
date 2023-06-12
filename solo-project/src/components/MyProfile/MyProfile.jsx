import { useEffect } from 'react';
import { Title } from '../Title';
import cl from './MyProfile.module.css';
import { PieChart } from 'react-minimal-pie-chart';
import { useBooks } from '../../useBooks';

export const MyProfile = () => {
  const year = new Date().getFullYear();

  const { fetchUserBooks, selectBooksByStatus } = useBooks();

  const booksToRead = selectBooksByStatus('toread');
  const booksReading = selectBooksByStatus('reading');
  const booksRead = selectBooksByStatus('read');

  useEffect(() => {
    fetchUserBooks();
  }, []);

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
          <h2>My Progress ({year} year)</h2>
          <div className={cl.circle_chart}>
            <PieChart
              data={[
                { value: booksToRead.length, color: '#C13C37' },
                { value: booksReading.length, color: '#6A2135' },
                { value: booksRead.length, color: '#E38627' },
              ]}
            />
            <div className={cl.chart}>
              <h3>
                <img src="/book.svg" alt="picture" /> Want to read (
                {booksToRead.length})
              </h3>
              <h3>
                <img src="/book2.svg" alt="picture" /> Reading now (
                {booksReading.length})
              </h3>
              <h3>
                <img src="/book3.svg" alt="picture" /> Read ({booksRead.length})
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
