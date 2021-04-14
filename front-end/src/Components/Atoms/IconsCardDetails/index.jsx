/* eslint-disable react/prop-types */
import React from 'react';
import Colors from '../../../Colors';
import { ServicesHomeTitle } from '../Texts';
import './style.css';

const IconsCardDetails = ({ iconsProps }) => {
  const { icon, info, type } = iconsProps;
  return (
    <section className="icons-details-container">
      <img src={icon} alt="iconGuests" className="icons-size" />
      <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
        {type}
      </ServicesHomeTitle>
      <p className="p-icons">{info}</p>
    </section>
  );
};

export default IconsCardDetails;
