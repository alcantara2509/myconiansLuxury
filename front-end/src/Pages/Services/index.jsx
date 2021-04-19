import React from 'react';
import { MenuMobile, PagesBanner } from '../../Components/Molecules';
import { DarkSection, Footer, IntroServices } from '../../Components/Organisms';
import { defaultText } from '../../Components/Organisms/DarkSection/texts';
import { bannerServices } from '../../assets';

const Services = () => (
  <main className="services-page-container">
    <MenuMobile />
    <PagesBanner title="24/7 services" color="white" banner={bannerServices} />
    <IntroServices />
    <DarkSection title={defaultText.title} paragraph={defaultText.paragraph} />
    <Footer />
  </main>
);

export default Services;
