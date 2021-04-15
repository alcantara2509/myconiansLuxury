/* eslint-disable no-undef */
import React, { useContext } from 'react';
import Colors from '../../Colors';
import { MainTitle, ServicesHomeTitle } from '../../Components/Atoms/Texts';
import MLContext from '../../Context/MLContext';
import imgError from '../../Utils/imgError';
import './style.css';

const Wishlist = () => {
  const { allVillas } = useContext(MLContext);
  const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));

  const list = allVillas.filter((villa) => favoriteVillas
    .find((e) => e.includes(villa.villas_name)));

  return (
    <main className="wishlist-container">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        My Wishlist
      </MainTitle>
      {
        list.map((e) => (
          <>
            <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
              {e.villas_name}
            </ServicesHomeTitle>
            <img src={e.cover} alt={e.villas_name} onError={imgError} className="wish-img" />
          </>
        ))
      }
    </main>
  );
};

export default Wishlist;
