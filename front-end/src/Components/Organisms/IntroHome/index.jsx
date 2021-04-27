/* eslint-disable import/no-cycle */
import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import { Form } from '..';
import './style.css';

const IntroHome = () => (
  <section className="intro-container">
    <section className="desktop-intro-title">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        bespoke luxury services and
        experiences in mykonos
      </MainTitle>
    </section>
    <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
      Let us build your dream
      experience in Mykonos.
    </ItalicHighlight>
    <section className="desktop-p-intro">
      <Paragraph props={{ textColor: Colors.primaryColor }}>
        From luxury villas to unbelievable tours and
        excursions. Tailor-made activities, yachting,
        helicopter rides, water sports and sailing
        experiences in the greek islands.
      </Paragraph>
    </section>
    <Form />
  </section>
);

export default IntroHome;
