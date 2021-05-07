import React from 'react';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import { DarkSection, Footer, IntroServices } from '../../Components/Organisms';
import { bannerServices } from '../../assets';

const Services = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner
      title="24/7 services"
      color="white"
      banner={bannerServices}
      id="srv"
      subTitle="Your personal concierge will be 24/7 at your disposal fulfilling your every wish!"
    />
    <IntroServices />
    <DarkSection />
    <Footer />
  </main>
);

export default Services;
