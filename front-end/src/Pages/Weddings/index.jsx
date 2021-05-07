import React from 'react';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import {
  DarkSectionEnjoy, Footer, IntroWedding, WeddingContent,
} from '../../Components/Organisms';
import { bannerWeddings } from '../../assets';

const Weddings = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner
      title="luxury weddings"
      color="white"
      banner={bannerWeddings}
      subTitle="Let us plan your wedding and create memories that will last a lifetime."
    />
    <IntroWedding />
    <WeddingContent />
    <DarkSectionEnjoy />
    <Footer />
  </main>
);

export default Weddings;
