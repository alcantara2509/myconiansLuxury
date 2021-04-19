/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
// import { yachtHome } from '../../../assets';
import { DarkButton } from '../../Atoms';
import './style.css';
import asd from '../../../assets/images/asd.svg';

const LinkSectionHome = () => (
  <section className="link-section-home">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      LUXURY CONCIERGE
    </MainTitle>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      Our leading premium lifestyle management
      <br />
      and concierge services are provided by a
      <br />
      dedicated team of lifestyle managers that
      <br />
      always satisfy our clients preferences.
      <br />
      <br />
      Your personal concierge will be 24/7 at your
      <br />
      disposal on all locations.
    </Paragraph>
    <img src={asd} alt="villa" className="link-section-image" />
    <DarkButton linkTo="/villas">
      Find out more
    </DarkButton>
  </section>
);

export default LinkSectionHome;
