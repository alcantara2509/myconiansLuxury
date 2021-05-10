import React from 'react';
import Colors from '../../../Colors';
import { MainTitle, Paragraph, ItalicHighlight } from '../../Atoms/Texts';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const CovidContent = () => (
  <main className="covid-content-container">
    <section className="intro-services-content-resp">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).title}
      </MainTitle>
      <Paragraph props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).paragraph1}
        <br />
        <br />
        {languages(english, portuguese, spanish).paragraph2}
        <br />
        <br />
        <br />
        <br />
      </Paragraph>
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).subTitle}
      </ItalicHighlight>
    </section>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      {languages(english, portuguese, spanish).measure1}
      <br />
      <br />
      {languages(english, portuguese, spanish).measure2}
      <br />
      <br />
      {languages(english, portuguese, spanish).measure3}
      <br />
      <br />
      {languages(english, portuguese, spanish).measure4}
      <br />
      <br />
      {languages(english, portuguese, spanish).measure5}
      <br />
      <br />
      {languages(english, portuguese, spanish).measure6}
    </Paragraph>
  </main>
);

export default CovidContent;
