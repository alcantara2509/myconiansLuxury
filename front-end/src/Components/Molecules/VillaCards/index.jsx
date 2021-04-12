/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { iconGuests, iconRooms, iconBaths } from '../../../assets';
import { imgError, heartClick, checkHeart } from '../../../Utils';
import { MainTitle } from '../../Atoms/Texts';
import { IconsCard } from '../../Atoms';
import './style.css';
import Colors from '../../../Colors';

const VillaCards = ({ cardProps }) => {
  const {
    image, name, guests, rooms, baths, setReload, reload,
  } = cardProps;

  return (
    <section key={name} className="card-container">
      <button
        className="fav-button"
        type="button"
        onClick={({ target: { alt } }) => heartClick(alt, reload, setReload)}
      >
        {checkHeart(name)}
      </button>
      <Link to={`/villas/${name}`} className="card-link">
        <img className="image-size" src={image} onError={imgError} alt={name} />
        <MainTitle props={{ textColor: Colors.primaryColor }}>
          Villa
          {' '}
          {name}
        </MainTitle>

        <section className="infos-container">
          <IconsCard iconsProps={{ icon: iconGuests, info: guests }} />
          <IconsCard iconsProps={{ icon: iconRooms, info: rooms }} />
          <IconsCard iconsProps={{ icon: iconBaths, info: baths }} />
        </section>
      </Link>
    </section>
  );
};

export default VillaCards;
