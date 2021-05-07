import React from 'react';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import { DarkSection, Footer, CovidContent } from '../../Components/Organisms';
import bannerCovid from '../../assets/images/bannerCovid.jpg';

const Events = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner
      title="covid-19 measures"
      color="white"
      banner={bannerCovid}
      subTitle="Stay safe and enjoy a smooth holiday in the greek islands."
    />
    <CovidContent />
    <DarkSection />
    <Footer />
  </main>
);

export default Events;
