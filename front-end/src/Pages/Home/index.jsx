import React from 'react';
import { MenuMobile, MenuDesktop, HomeBanner } from '../../Components/Molecules';
import {
  IntroHome, VillasHome, YachtHome, ConciergeHome, ServicesHome, DarkSection, Footer,
  VillasHomeDesktop, YachtHomeDesktop, ConciergeHomeDesktop,
} from '../../Components/Organisms';
import { defaultText } from '../../Components/Organisms/DarkSection/texts';
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
    <DarkSection title={defaultText.title} paragraph={defaultText.paragraph} />
    <Footer />
  </main>
);

export default Home;
