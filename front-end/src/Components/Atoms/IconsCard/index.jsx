/* eslint-disable react/prop-types */
import React from 'react';

const IconsCard = ({ iconsProps }) => {
  const { icon, info } = iconsProps;
  return (
    <section className="icons-container">
      <img src={icon} alt="iconGuests" className="icons-size" />
      <p>{info}</p>
    </section>
  );
};

export default IconsCard;
