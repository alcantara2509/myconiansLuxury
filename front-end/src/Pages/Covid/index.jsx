import React from 'react';
import { MenuMobile, PagesBanner } from '../../Components/Molecules';
import { DarkSection, Footer, CovidContent } from '../../Components/Organisms';
import { defaultText } from '../../Components/Organisms/DarkSection/texts';

const Events = () => (
  <main className="services-page-container">
    <MenuMobile />
    <PagesBanner title="covid-19 measures" color="white" />
    <CovidContent />
    <DarkSection title={defaultText.title} paragraph={defaultText.paragraph} />
    <Footer />
  </main>
);

export default Events;
