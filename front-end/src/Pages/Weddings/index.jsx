import React from 'react';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import {
  DarkSection, Footer, IntroWedding, WeddingContent,
} from '../../Components/Organisms';
import { defaultText } from '../../Components/Organisms/DarkSection/texts';
import { bannerWeddings } from '../../assets';

const Weddings = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner title="luxury weddings" color="white" banner={bannerWeddings} />
    <IntroWedding />
    <WeddingContent />
    <DarkSection title={defaultText.title} paragraph={defaultText.paragraph} />
    <Footer />
  </main>
);

export default Weddings;
