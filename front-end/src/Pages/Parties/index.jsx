import React from 'react';
import { DarkButton } from '../../Components/Atoms';
import { MenuMobile, PagesBanner } from '../../Components/Molecules';
import {
  DarkSection, Footer, IntroParties, PartiesContent,
} from '../../Components/Organisms';
import { defaultText } from '../../Components/Organisms/DarkSection/texts';
import './style.css';

const Parties = () => (
  <main className="services-page-container">
    <MenuMobile />
    <PagesBanner title="yacht parties" color="white" />
    <IntroParties />
    <PartiesContent />
    <section className="dark-btn-parties">
      <DarkButton linkTo="yachts">see yacht charter</DarkButton>
    </section>
    <DarkSection title={defaultText.title} paragraph={defaultText.paragraph} />
    <Footer />
  </main>
);

export default Parties;
