/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import { yachtHome } from '../../../assets';
import { DarkButton } from '../../Atoms';
import './style.css';

const LinkSectionHome = () => (
  <section className="link-section-home">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      LUXURY YACHTING
    </MainTitle>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      Explore the best of Greece on a luxury yacht
      <br />
      charter. A list of luxury services and activities
      <br />
      added to make your yacht holidays unique.
      <br />
      <br />
      Charter a yacht and explore the nearby
      <br />
      islands, practice water sports and discover
      <br />
      spectacular beaches.
    </Paragraph>
    <img src={yachtHome} alt="villa" className="link-section-image" />
    <DarkButton linkTo="/villas">
      See Yacht Charter
    </DarkButton>
  </section>
);

export default LinkSectionHome;
