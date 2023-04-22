import React from 'react';
import { MainTitle, ItalicHighlight, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const IntroVillas = () => (
  <>
    <section className="intro-villas-container mobile">
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
    <section className="intro-villas-container desktop">
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
  </>
);

export default IntroVillas;
