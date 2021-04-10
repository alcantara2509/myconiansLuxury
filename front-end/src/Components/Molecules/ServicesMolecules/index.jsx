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
    <Paragraph props={{ textColor: Colors.primaryColor }}>
      {children}
    </Paragraph>
  </section>
);

export default ServicesMolecules;
