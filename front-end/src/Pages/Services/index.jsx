import React from 'react';
import { MenuMobile, PagesBanner } from '../../Components/Molecules';
import { IntroServices } from '../../Components/Organisms';

const Services = () => {
  console.log('services');
  return (
    <main className="services-page-container">
      <MenuMobile />
      <PagesBanner title="24/7 services" color="white" />
      <IntroServices />
    </main>
  );
};

export default Services;
