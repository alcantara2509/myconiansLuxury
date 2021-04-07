/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import { villasHome } from '../../../assets';
import { DarkButton } from '../../Atoms';
import './style.css';

const LinkSectionHome = () => (
  <section className="link-section-home">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      VILLA HOLIDAYS
    </MainTitle>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      Our accommodation portfolio only includes
      <br />
      the most exclusive properties in Mykonos.
      <br />
      <br />
      Experience the perfect balance between
      <br />
      ultimate luxury and the comfort of your own
      <br />
      home. Outstanding villas, breathtaking views,
      <br />
      unique experiences you will never forget.
    </Paragraph>
    <img src={villasHome} alt="villa" className="link-section-image" />
    <DarkButton linkTo="/villas">
      See All Villas
    </DarkButton>
  </section>
);

export default LinkSectionHome;
