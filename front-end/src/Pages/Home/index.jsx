import React from 'react';
import { MenuMobile, HomeBanner } from '../../Components/Molecules';
import { MainTitle } from '../../Components/Atoms/Texts';
import Colors from '../../Colors';
import './style.css';

const Home = () => (
  <main className="home-container">
    <MenuMobile />
    <HomeBanner />
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      BESPOKE LUXURY SERVICES AND EXPERIENCES IN MYKONOS
    </MainTitle>
  </main>
);

export default Home;
