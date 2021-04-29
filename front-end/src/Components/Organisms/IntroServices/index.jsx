/* eslint-disable import/no-cycle */
import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import { ServicesTypes } from '../../Molecules';
import {
  pictureConcierge, pictureFood, pictureTransfer, pictureSecurity, pictureAesthetic,
} from '../../../assets';
import './style.css';

const IntroServices = () => (
  <section className="intro-services-container">
    <section className="intro-services-content-resp mobile">
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
    </section>
    <section className="intro-services-content-resp desktop">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        experience another level
      </MainTitle>
      <Paragraph props={{ textColor: Colors.primaryColor }}>
        Our travel experts and lifestyle managers
        have a selection of the finest villas, yachts,
        <br />
        restaurants, clubs, spas, tailor-made activities,
        luxury products, bespoke events, and
        <br />
        experiences. We strive to offer an
        unparalleled level of service tailored to each
        <br />
        of our guests.
      </Paragraph>
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        Luxury holidays are not about price. It&apos;s about quality.
      </ItalicHighlight>
    </section>
    <section className="intro-services-types-container">
      <ServicesTypes
        image={pictureConcierge}
        title="concierge"
        paragraph="VIP Bookings & Reservations 24/7 Errand Support"
      />
      <ServicesTypes
        image={pictureFood}
        title="food & bar services"
        paragraph="Private chef | Bartender | Butler | Waiter"
      />
      <ServicesTypes
        image={pictureTransfer}
        title="vip transfer"
        paragraph="Private driver | Luxury cars | Jets | Helicopters"
      />
      <ServicesTypes
        image={pictureSecurity}
        title="vip security"
        paragraph="Static & Close Protection | K9 Dogs  Money Shipments | Security Systems"
      />
      <ServicesTypes
        image={pictureAesthetic}
        title="aesthetic services"
        paragraph="Hair Stylist | Nails Specialist | Massage Personal Trainer | Yoga Teacher"
      />
    </section>
  </section>
);

export default IntroServices;
