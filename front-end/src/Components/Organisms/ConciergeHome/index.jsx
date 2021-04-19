/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import bannerServices from '../../../assets/images/bannerServices.jpg';
import { DarkButton } from '../../Atoms';
import './style.css';

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
    <img src={bannerServices} alt="villa" className="link-section-image" />
    <DarkButton linkTo="/services">
      Find out more
    </DarkButton>
  </section>
);

export default LinkSectionHome;
