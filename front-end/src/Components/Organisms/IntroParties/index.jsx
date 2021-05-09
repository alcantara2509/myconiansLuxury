/* eslint-disable import/no-cycle */
import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const IntroParties = () => (
  <section className="intro-services-container">
    <section className="intro-services-content-resp">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).title}
      </MainTitle>
      <Paragraph props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).paragraph}
      </Paragraph>
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).subTitle}
      </ItalicHighlight>
    </section>
  </section>
);

export default IntroParties;
