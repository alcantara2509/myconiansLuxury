import React from 'react';
import { MenuMobile, MenuDesktop, HomeBanner } from '../../Components/Molecules';
import {
  IntroHome, VillasHome, YachtHome, ConciergeHome, ServicesHome, DarkSection, Footer,
  VillasHomeDesktop, YachtHomeDesktop, ConciergeHomeDesktop,
} from '../../Components/Organisms';
import './style.css';

const Home = () => (
  <main className="home-container">
    <MenuMobile />
    <MenuDesktop />
    <HomeBanner />
    <IntroHome />
    <VillasHome />
    <VillasHomeDesktop />
    <YachtHome />
    <YachtHomeDesktop />
    <ConciergeHome />
    <ConciergeHomeDesktop />
    <ServicesHome />
    <DarkSection />
    <Footer />
  </main>
);

export default Home;
