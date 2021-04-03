/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  iconGuests, iconRooms, iconBaths, replaceImage,
} from '../../../assets';
import './style.css';

const VillaCards = ({ cardProps }) => {
  const {
    image, name, guests, rooms, baths,
  } = cardProps;

  const imgError = ({ target }) => {
    target.src = replaceImage;
  };

  return (
    <section key={name} className="card-container">
      <img className="image-size" src={image} onError={imgError} alt={name} />
      <h3>{name}</h3>

      <section className="infos-container">

        <section className="icons-container">
          <img src={iconGuests} alt="iconGuests" className="icons-size" />
          <p>{guests}</p>
        </section>

        <section className="icons-container">
          <img src={iconRooms} alt="iconRooms" className="icons-size" />
          <p>{rooms}</p>
        </section>

        <section className="icons-container">
          <img src={iconBaths} alt="iconBaths" className="icons-size" />
          <p>{baths}</p>
        </section>

      </section>
    </section>
  );
};

export default VillaCards;
