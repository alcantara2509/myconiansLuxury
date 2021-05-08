import React from 'react';
import { DarkButton } from '../../Components/Atoms';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import {
  DarkSectionEnjoy, Footer, IntroParties, PartiesContent,
} from '../../Components/Organisms';
import { bannerYachtparties } from '../../assets';
import languages from '../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const Parties = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner
      title={languages(english, portuguese, spanish).title}
      color="white"
      banner={bannerYachtparties}
      subTitle={languages(english, portuguese, spanish).subTitle}
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
