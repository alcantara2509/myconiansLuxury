/* eslint-disable import/no-cycle */
import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import './style.css';

const IntroParties = () => (
  <section className="intro-services-container">
    <section className="intro-services-content-resp mobile">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        Let us design an
        <br />
        unforgetable party
      </MainTitle>
      <Paragraph props={{ textColor: Colors.primaryColor }}>
        Yacht parties have become an important pillar
        <br />
        of the island’s clubbing scene, making
        <br />
        cosmopolitan Mykonos a party island.
      </Paragraph>
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        Partying and luxury have found a natural
        <br />
        way of co-existing with the beauty and
        <br />
        climate of this island.
      </ItalicHighlight>
    </section>
    <section className="intro-services-content-resp desktop">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        Let us design an unforgetable party
      </MainTitle>
      <Paragraph props={{ textColor: Colors.primaryColor }}>
        Yacht parties have become an important pillar
        of the island’s clubbing scene,
        <br />
        making cosmopolitan Mykonos a party island.
      </Paragraph>
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        Partying and luxury have found a natural way of
        <br />
        co-existing with the beauty and
        climate of this island.
      </ItalicHighlight>
    </section>
  </section>
);

export default IntroParties;
