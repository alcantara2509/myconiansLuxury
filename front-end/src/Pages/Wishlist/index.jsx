/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Colors from '../../Colors';
import Loading from '../../Components/Atoms/Loading';
import { MainTitle, ServicesHomeTitle, Paragraph } from '../../Components/Atoms/Texts';
import { MenuMobile } from '../../Components/Molecules';
import MLContext from '../../Context/MLContext';
import { checkHeart, heartClick, setLocalStorage } from '../../Utils';
import imgError from '../../Utils/imgError';
import './style.css';

const Wishlist = () => {
  const { allVillas, isFetching } = useContext(MLContext);
  const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
  const [reload, setReload] = useState('');

  useEffect(() => {
    setLocalStorage();
  }, [reload]);

  const list = allVillas.filter((villa) => favoriteVillas
    .find((e) => e.includes(villa.villas_name)));

  return (
    isFetching ? <Loading type="bubbles" color="black" />
      : (
        <main className="wishlist-container">
          <MenuMobile />
          <section className="wish-title">
            <MainTitle props={{ textColor: Colors.primaryColor }}>
              My Wishlist
            </MainTitle>
          </section>
          {
        list.map((e) => (
          <section className="wish-villa-container">
            <img src={e.cover} alt={e.villas_name} onError={imgError} className="wish-img" />
            <section className="wish-villa-info">
              <section className="wish-heart-content">
                <button
                  className="fav-button"
                  type="button"
                  onClick={() => heartClick(e.villas_name, reload, setReload)}
                >
                  {checkHeart(e.villas_name)}
                </button>
              </section>
              <section className="wish-title-content">
                <ServicesHomeTitle props={{ textColor: Colors.primaryColor }}>
                  Villa
                  {' '}
                  {' '}
                  {e.villas_name}
                </ServicesHomeTitle>
              </section>
              <section className="wish-link-content">
                <Link to={`/villas/${e.villas_name}`}>
                  <Paragraph props={{ textColor: Colors.primaryColor }}>
                    see Villa
                  </Paragraph>
                </Link>
              </section>
            </section>
          </section>
        ))
      }
        </main>
      )
  );
};

export default Wishlist;
