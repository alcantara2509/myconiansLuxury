/* eslint-disable import/no-cycle */
import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import { Form } from '..';
import './style.css';

const IntroHome = () => (
  <section className="intro-container">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      BESPOKE LUXURY
      <br />
      SERVICES AND
      <br />
      EXPERIENCES IN
      <br />
      MYKONOS
    </MainTitle>
    <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
      Let us build your dream
      <br />
      experience in Mykonos.
    </ItalicHighlight>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      From luxury villas to unbelievable tours and
      <br />
      excursions. Tailor-made activities, yachting,
      <br />
      helicopter rides, water sports and sailing
      <br />
      experiences in the greek islands.
    </Paragraph>
    <Form />
  </section>
);

export default IntroHome;
