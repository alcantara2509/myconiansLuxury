/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, Paragraph } from '../../Atoms/Texts';
import Form from '../Form';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const DarkSection = () => (
  <section className="dark-section-container">
    <MainTitle props={{ textColor: 'white' }}>
      {languages(english, portuguese, spanish).title}
    </MainTitle>
    <Paragraph props={{ textColor: 'white' }}>
      {languages(english, portuguese, spanish).paragraph}
    </Paragraph>
    <Form />
  </section>
);

export default DarkSection;
