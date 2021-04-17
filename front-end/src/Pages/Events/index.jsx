import React from 'react';
import { MenuMobile, PagesBanner } from '../../Components/Molecules';
import { DarkSection, Footer, IntroEvents } from '../../Components/Organisms';
import { defaultText } from '../../Components/Organisms/DarkSection/texts';

const Events = () => (
  <main className="services-page-container">
    <MenuMobile />
    <PagesBanner title="event planning" color="white" />
    <IntroEvents />
    <DarkSection title={defaultText.title} paragraph={defaultText.paragraph} />
    <Footer />
  </main>
);

export default Events;
