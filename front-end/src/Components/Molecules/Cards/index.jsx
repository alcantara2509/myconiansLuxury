/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { iconGuests, iconRooms, iconBaths } from '../../../assets';
import { imgError, heartClick, checkHeart } from '../../../Utils';
import './style.css';

const VillaCards = ({ cardProps }) => {
  const {
    image, name, guests, rooms, baths, setReload, reload,
  } = cardProps;

  return (
    <section key={name} className="card-container">
      <button type="button" onClick={({ target: { alt } }) => heartClick(alt, reload, setReload)}>
        {checkHeart(name)}
      </button>
      <Link to={`/villas/${name}`}>
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
      </Link>
    </section>
  );
};

export default VillaCards;
