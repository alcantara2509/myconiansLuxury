import React from 'react';
import { MenuMobile, HomeBanner } from '../../Components/Molecules';
import { IntroHome } from '../../Components/Organisms';
import './style.css';

const Home = () => (
  <main className="home-container">
    <MenuMobile />
    <HomeBanner />
    <IntroHome />
  </main>
);

export default Home;
