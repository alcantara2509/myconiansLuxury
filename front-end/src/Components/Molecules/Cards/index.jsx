/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import { iconGuests, iconRooms, iconBaths } from '../../../assets';
import './style.css';

const VillaCards = ({ cardProps }) => {
  // const [imageLoadError, setImageLoadError] = useState(true);
  const {
    image, name, guests, rooms, baths,
  } = cardProps;

  const replaceImage = 'https://images.unsplash.com/photo-1598395927056-8d895e701c3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80';

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
