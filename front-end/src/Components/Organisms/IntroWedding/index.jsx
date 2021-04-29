/* eslint-disable import/no-cycle */
import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import './style.css';

const IntroWedding = () => (
  <section className="intro-services-container">
    <section className="intro-services-content-resp mobile">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        organising weddings
        <br />
        is our thing
      </MainTitle>
      <Paragraph props={{ textColor: Colors.primaryColor }}>
        Our professional staff of wedding planners
        <br />
        and lifestyle managers will fully commit and
        <br />
        collaborate with you throughout the whole
        <br />
        process of your wedding preparations.
      </Paragraph>
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        Our team will plan your ideal wedding,
        <br />
        reception or honeymoon destination.
      </ItalicHighlight>
    </section>
    <section className="intro-services-content-resp desktop">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        organising weddings
        is our thing
      </MainTitle>
      <Paragraph props={{ textColor: Colors.primaryColor }}>
        Our professional staff of wedding planners
        and lifestyle managers will fully commit and
        <br />
        collaborate with you throughout the whole
        process of your wedding preparations.
      </Paragraph>
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        Our team will plan your ideal wedding,
        reception or honeymoon destination.
      </ItalicHighlight>
    </section>
  </section>
);

export default IntroWedding;
