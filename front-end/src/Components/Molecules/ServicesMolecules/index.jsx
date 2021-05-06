/* eslint-disable react/prop-types */
import React from 'react';
import { ServicesHomeTitle, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import './style.css';

const ServicesMolecules = ({ title, source, children }) => (
  <section className="services-molecules-container">
    <img src={source} alt="icon" className="services-icons" />
    <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
      {title}
    </ServicesHomeTitle>
    <section className="services-molecules-paragraph-container">
      <Paragraph props={{ textColor: Colors.primaryColor }}>
        {children}
      </Paragraph>
    </section>
  </section>
);

export default ServicesMolecules;
