/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  iconGuests, iconRooms, iconBaths, iconFavs, replaceImage,
} from '../../../assets';
import './style.css';

const VillaCards = ({ cardProps }) => {
  const {
    image, name, guests, rooms, baths, setReload, reload,
  } = cardProps;

  const imgError = ({ target }) => {
    target.src = replaceImage;
  };

  const checkHeart = () => {
    const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
    if (favoriteVillas.includes(name)) {
      return <img src={iconGuests} alt={name} className="icons-size" />;
    }
    return <img src={iconFavs} alt={name} className="icons-size" />;
  };

  const heartClick = ({ target: { alt } }) => {
    setReload(reload + 1);
    const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
    if (favoriteVillas.includes(alt)) {
      favoriteVillas.splice(favoriteVillas.indexOf(alt), 1);
      return localStorage.setItem('favoriteVillas', JSON.stringify(favoriteVillas));
    }
    favoriteVillas.push(alt);
    return localStorage.setItem('favoriteVillas', JSON.stringify(favoriteVillas));
  };

  return (
    <section key={name} className="card-container">
      <button type="button" onClick={heartClick}>
        {checkHeart()}
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
