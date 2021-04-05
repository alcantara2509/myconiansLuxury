/* eslint-disable no-undef */
import React from 'react';
import { iconFavs, iconFillFavs } from '../assets';

const checkHeart = (name) => {
  const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
  if (favoriteVillas.includes(name)) {
    return <img src={iconFillFavs} alt={name} className="icons-size" />;
  }
  return <img src={iconFavs} alt={name} className="icons-size" />;
};

export default checkHeart;
