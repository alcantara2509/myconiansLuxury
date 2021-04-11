/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle, Paragraph } from '../../Atoms/Texts';
import { EnquireButton } from '../../Atoms';
import './style.css';

const DarkSection = ({ title, paragraph }) => (
  <section className="dark-section-container">
    <MainTitle props={{ textColor: 'white' }}>
      {title}
    </MainTitle>
    <Paragraph props={{ textColor: 'white' }}>
      {paragraph}
    </Paragraph>
    <EnquireButton />
  </section>
);

export default DarkSection;
