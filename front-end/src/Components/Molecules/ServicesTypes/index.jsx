/* eslint-disable react/prop-types */
import React from 'react';
import { ServicesHomeTitle, Paragraph } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import './style.css';

const ServicesTypes = ({ image, title, paragraph }) => (
  <>
    <img src={image} alt={title} className="image-size-type" />
    <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
      {title}
    </ServicesHomeTitle>
    <section className="type-paragraph">
      <Paragraph props={{ textColor: Colors.primaryColor }}>
        {paragraph}
      </Paragraph>
    </section>
  </>
);

export default ServicesTypes;
