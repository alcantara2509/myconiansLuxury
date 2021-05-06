/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, Paragraph } from '../../Atoms/Texts';
import Form from '../Form';
import './style.css';

const DarkSection = ({ title, paragraph }) => (
  <section className="dark-section-container">
    <MainTitle props={{ textColor: 'white' }}>
      {title}
    </MainTitle>
    <Paragraph props={{ textColor: 'white' }}>
      {paragraph}
    </Paragraph>
    <Form />
  </section>
);

export default DarkSection;
