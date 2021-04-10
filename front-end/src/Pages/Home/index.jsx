import React from 'react';
import { MenuMobile, HomeBanner } from '../../Components/Molecules';
import {
  IntroHome, VillasHome, YachtHome, ConciergeHome, ServicesHome,
} from '../../Components/Organisms';
import './style.css';

const Home = () => (
  <main className="home-container">
    <MenuMobile />
    <HomeBanner />
    <IntroHome />
    <VillasHome />
    <YachtHome />
    <ConciergeHome />
    <ServicesHome />
  </main>
);

export default Home;
