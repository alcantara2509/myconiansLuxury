import React from 'react';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import { DarkSection, Footer, IntroServices } from '../../Components/Organisms';
import { bannerServices } from '../../assets';
import languages from '../../Utils/languages';
import { english, portuguese, spanish } from './languages';

const Services = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner
      title={languages(english, portuguese, spanish).title}
      color="white"
      banner={bannerServices}
      id="srv"
      subTitle={languages(english, portuguese, spanish).subTitle}
    />
    <IntroServices />
    <DarkSection />
    <Footer />
  </main>
);

export default Services;
