import React from 'react';
import { MenuMobile, HomeBanner } from '../../Components/Molecules';
import './style.css';

const Home = () => (
  <main className="home-container">
    <MenuMobile />
    <HomeBanner />
  </main>
);

export default Home;
