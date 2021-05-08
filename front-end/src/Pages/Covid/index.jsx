import React from 'react';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import { DarkSection, Footer, CovidContent } from '../../Components/Organisms';
import bannerCovid from '../../assets/images/bannerCovid.jpg';
import languages from '../../Utils/languages';
import { english, portuguese, spanish } from './languages';

const Events = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner
      title={languages(english, portuguese, spanish).title}
      color="white"
      banner={bannerCovid}
      subTitle={languages(english, portuguese, spanish).subTitle}
    />
    <CovidContent />
    <DarkSection />
    <Footer />
  </main>
);

export default Events;
