/* eslint-disable react/prop-types */
import React from 'react';
import Colors from '../../../Colors';
import { ServicesHomeTitle } from '../Texts';

const IconsCard = ({ iconsProps }) => {
  const { icon, info, type } = iconsProps;
  return (
    <section className="icons-container">
      <img src={icon} alt="iconGuests" className="icons-size" />
      <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
        {type}
      </ServicesHomeTitle>
      <p>{info}</p>
    </section>
  );
};

export default IconsCard;
