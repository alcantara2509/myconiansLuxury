/* eslint-disable import/no-cycle */
import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import { ServicesTypes, EventsTypes } from '../../Molecules';
import {
  bannerWeddings, bannerYachtparties, pictureEvents,
} from '../../../assets';
import './style.css';

const IntroEvents = () => (
  <section className="intro-services-container">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      the art of luxury
      <br />
      events
    </MainTitle>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      We pride ourselves in offering first-class
      <br />
      luxury services with full attention to every
      <br />
      detail. Our event/party planners have the
      <br />
      know-how to bring about the best results
      <br />
      whatever the occasion demands. We will
      <br />
      conceptualize and create a spectacular
      <br />
      world-class event/party!
    </Paragraph>
    <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
      Discover unparalleled detail, expertise
      <br />
      and experience in luxury event planning.
    </ItalicHighlight>
    <EventsTypes
      image={bannerWeddings}
      title="luxury weddings"
      paragraph="Experience your special occasion with us & create memories that will last a lifetime!"
      link="weddings"
    />
    <EventsTypes
      image={bannerYachtparties}
      title="yacht parties"
      paragraph="Yacht parties are a must-have during your holidays in the greek islands!"
      link="parties"
    />
    <ServicesTypes
      image={pictureEvents}
      title="other events"
      paragraph="Private Parties | Corporate Events Bachelor | Baptism | Ceremonies"
    />
  </section>
);

export default IntroEvents;
