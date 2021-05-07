import React from 'react';
import { DarkButton } from '../../Components/Atoms';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import {
  DarkSectionEnjoy, Footer, IntroParties, PartiesContent,
} from '../../Components/Organisms';
import { bannerYachtparties } from '../../assets';
import './style.css';

const Parties = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner
      title="yacht parties"
      color="white"
      banner={bannerYachtparties}
      subTitle="Yacht parties are a must-have during your holidays in the greek islands."
    />
    <IntroParties />
    <PartiesContent />
    <section className="dark-btn-parties">
      <DarkButton linkTo="yachts">see yacht charter</DarkButton>
    </section>
    <DarkSectionEnjoy />
    <Footer />
  </main>
);

export default Parties;
