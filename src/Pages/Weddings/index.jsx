import React from 'react';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import {
  DarkSectionEnjoy, Footer, IntroWedding, WeddingContent,
} from '../../Components/Organisms';
import { bannerWeddings } from '../../assets';
import languages from '../../Utils/languages';
import { english, portuguese, spanish } from './languages';

const Weddings = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner
      title={languages(english, portuguese, spanish).title}
      color="white"
      banner={bannerWeddings}
      subTitle={languages(english, portuguese, spanish).subTitle}
    />
    <IntroWedding />
    <WeddingContent />
    <DarkSectionEnjoy />
    <Footer />
  </main>
);

export default Weddings;
