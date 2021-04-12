import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import './style.css';

const IntroVillas = () => (
  <section className="intro-villas-container">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      handpicked villa
      <br />
      collection
    </MainTitle>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      Enjoy our luxury holiday villas in Greece.
      <br />
      Luxury lifestyle & bespoke services, with 24/7
      <br />
      personal concierge.
    </Paragraph>
    <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
      Explore just a small selection of our
      <br />
      luxury holiday villas collection below.
    </ItalicHighlight>
  </section>
);

export default IntroVillas;
