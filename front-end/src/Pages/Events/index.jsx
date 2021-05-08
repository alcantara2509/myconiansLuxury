import React from 'react';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import { DarkSectionEnjoy, Footer, IntroEvents } from '../../Components/Organisms';
import { bannerEvents } from '../../assets';
import languages from '../../Utils/languages';
import { english, portuguese, spanish } from './languages';

const Events = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner
      title={languages(english, portuguese, spanish).title}
      color="white"
      banner={bannerEvents}
      subTitle={languages(english, portuguese, spanish).subTitle}
    />
    <IntroEvents />
    <DarkSectionEnjoy />
    <Footer />
  </main>
);

export default Events;
