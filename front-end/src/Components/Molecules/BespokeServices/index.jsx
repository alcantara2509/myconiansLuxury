import React from 'react';
import Colors from '../../../Colors';
import { ItalicHighlight, MainTitle, Paragraph } from '../../Atoms/Texts';
import './style.css';

const BespokeServices = () => (
  <section className="bespoke-container">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      bespoke services
    </MainTitle>
    <section className="island-highlight-wrapper">
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        Dive into a world of luxury and let us make your yacht holidays unforgettable.
      </ItalicHighlight>
    </section>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      <br />
      Yacht parties
      <br />
      <br />
      Snorkeling gear
      <br />
      <br />
      Stand up Paddle & Wakeboard
      <br />
      <br />
      E-Foil board rental
      <br />
      <br />
      Seabob & Jet Ski rental
      <br />
      <br />
      Cruises through near islands
      <br />
      <br />
      And more!
    </Paragraph>
  </section>
);

export default BespokeServices;
