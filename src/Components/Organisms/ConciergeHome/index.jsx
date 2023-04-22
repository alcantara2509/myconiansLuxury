/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import bannerServices from '../../../assets/images/bannerServices.jpg';
import { DarkButton } from '../../Atoms';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';

const LinkSectionHome = () => (
  <section className="link-section-home mobile">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      {languages(english, portuguese, spanish).title}
    </MainTitle>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      {languages(english, portuguese, spanish).paragraph}
    </Paragraph>
    <img src={bannerServices} alt="villa" className="link-section-image" />
    <DarkButton linkTo="/services">
      {languages(english, portuguese, spanish).darkButton}
    </DarkButton>
  </section>
);

export default LinkSectionHome;
