/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import bannerVillas from '../../../assets/images/bannerVillas.jpg';
import { DarkButton } from '../../Atoms';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const LinkSectionHome = () => (
  <section className="mobile link-section-home">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      {languages(english, portuguese, spanish).title}
    </MainTitle>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      {languages(english, portuguese, spanish).paragraph}
    </Paragraph>
    <img src={bannerVillas} alt="villa" className="link-section-image" />
    <DarkButton linkTo="/villas">
      {languages(english, portuguese, spanish).darkButton}
    </DarkButton>
  </section>
);

export default LinkSectionHome;
