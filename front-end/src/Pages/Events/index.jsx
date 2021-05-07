import React from 'react';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import { DarkSectionEnjoy, Footer, IntroEvents } from '../../Components/Organisms';
import { bannerEvents } from '../../assets';

const Events = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner
      title="event planning"
      color="white"
      banner={bannerEvents}
      subTitle="More than creating luxury events, we orchestrate memorable experiences."
    />
    <IntroEvents />
    <DarkSectionEnjoy />
    <Footer />
  </main>
);

export default Events;
