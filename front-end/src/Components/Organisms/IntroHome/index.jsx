/* eslint-disable import/no-cycle */
import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import { Form } from '..';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const IntroHome = () => (
  <section className="intro-container">
    <section className="desktop-intro-title">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).title}
      </MainTitle>
    </section>
    <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
      {languages(english, portuguese, spanish).subTitle}
    </ItalicHighlight>
    <section className="desktop-p-intro">
      <Paragraph props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).paragraph}
      </Paragraph>
    </section>
    <Form />
  </section>
);

export default IntroHome;
