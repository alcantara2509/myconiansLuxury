/* eslint-disable import/no-cycle */
import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import { ServicesTypes } from '../../Molecules';
import { bannerHome } from '../../../assets';
import './style.css';

const IntroServices = () => (
  <section className="intro-services-container">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      experience another
      <br />
      level
    </MainTitle>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      Our travel experts and lifestyle managers
      <br />
      have a selection of the finest villas, yachts,
      <br />
      restaurants, clubs, spas, tailor-made activities,
      <br />
      luxury products, bespoke events, and
      <br />
      experiences. We strive to offer an
      <br />
      unparalleled level of service tailored to each
      <br />
      of our guests.
    </Paragraph>
    <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
      Luxury holidays are not about price.
      <br />
      It&apos;s about quality.
    </ItalicHighlight>
    <ServicesTypes
      image={bannerHome}
      title="concierge"
      paragraph="VIP Bookings & Reservations 24/7 Errand Support"
    />
    <ServicesTypes
      image={bannerHome}
      title="food & bar services"
      paragraph="Private chef | Bartender | Butler | Waiter"
    />
    <ServicesTypes
      image={bannerHome}
      title="vip transfer"
      paragraph="Private driver | Luxury cars | Jets | Helicopters"
    />
    <ServicesTypes
      image={bannerHome}
      title="vip security"
      paragraph="Static & Close Protection | K9 Dogs  Money Shipments | Security Systems"
    />
    <ServicesTypes
      image={bannerHome}
      title="aesthetic services"
      paragraph="Hair Stylist | Nails Specialist | Massage Personal Trainer | Yoga Teacher"
    />
  </section>
);

export default IntroServices;
