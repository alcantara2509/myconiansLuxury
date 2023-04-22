import React from 'react';
import Colors from '../../../Colors';
import { ItalicHighlight, MainTitle, Paragraph } from '../../Atoms/Texts';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const BespokeServices = () => (
  <section className="bespoke-container">
    <MainTitle props={{ textColor: Colors.primaryColor }}>
      {languages(english, portuguese, spanish).title}
    </MainTitle>
    <section className="island-highlight-wrapper">
      <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
        {languages(english, portuguese, spanish).subTitle}
      </ItalicHighlight>
    </section>
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      <br />
      {languages(english, portuguese, spanish).service1}
      <br />
      <br />
      {languages(english, portuguese, spanish).service2}
      <br />
      <br />
      {languages(english, portuguese, spanish).service3}
      <br />
      <br />
      {languages(english, portuguese, spanish).service4}
      <br />
      <br />
      {languages(english, portuguese, spanish).service5}
      <br />
      <br />
      {languages(english, portuguese, spanish).service6}
      <br />
      <br />
      {languages(english, portuguese, spanish).service7}
    </Paragraph>
  </section>
);

export default BespokeServices;
