/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

const IconsCard = ({ iconsProps }) => {
  const { icon, info } = iconsProps;
  return (
    <section className="icons-container">
      <img src={icon} alt="iconGuests" className="icons-size" />
      <p className="p-icons">{info}</p>
    </section>
  );
};

export default IconsCard;
