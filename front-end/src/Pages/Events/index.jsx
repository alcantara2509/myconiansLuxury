import React from 'react';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import { DarkSection, Footer, IntroEvents } from '../../Components/Organisms';
import { defaultText } from '../../Components/Organisms/DarkSection/texts';
import { bannerEvents } from '../../assets';

const Events = () => (
  <main className="villas-container">
    <MenuMobile />
    <MenuDesktop />
    <PagesBanner title="event planning" color="white" banner={bannerEvents} />
    <IntroEvents />
    <DarkSection title={defaultText.title} paragraph={defaultText.paragraph} />
    <Footer />
  </main>
);

export default Events;
