import React from 'react';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import { DarkSection, Footer, IntroServices } from '../../Components/Organisms';
import { defaultText } from '../../Components/Organisms/DarkSection/texts';
import { bannerServices } from '../../assets';

const Services = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner title="24/7 services" color="white" banner={bannerServices} id="srv" />
    <IntroServices />
    <DarkSection title={defaultText.title} paragraph={defaultText.paragraph} />
    <Footer />
  </main>
);

export default Services;
