import React from 'react';
import { MenuMobile, PagesBanner } from '../../Components/Molecules';
import {
  DarkSection, Footer, IntroWedding, WeddingContent,
} from '../../Components/Organisms';
import { defaultText } from '../../Components/Organisms/DarkSection/texts';

const Weddings = () => (
  <main className="services-page-container">
    <MenuMobile />
    <PagesBanner title="luxury weddings" color="white" />
    <IntroWedding />
    <WeddingContent />
    <DarkSection title={defaultText.title} paragraph={defaultText.paragraph} />
    <Footer />
  </main>
);

export default Weddings;
