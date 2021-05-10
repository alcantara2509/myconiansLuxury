/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react';
import Colors from '../../Colors';
import { DarkButton } from '../../Components/Atoms';
import Loading from '../../Components/Atoms/Loading';
import { MainTitle } from '../../Components/Atoms/Texts';
import { MenuDesktop, MenuMobile } from '../../Components/Molecules';
import { DarkSection, Footer } from '../../Components/Organisms';
import MLContext from '../../Context/MLContext';
import { setLocalStorage } from '../../Utils';
import renderEmpty from './empty';
import wishCard from './wishCard';
import wishCardYacht from './wishCardYacht';
import languages from '../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const Wishlist = () => {
  const { allVillas, allYachts, isFetching } = useContext(MLContext);
  const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
  const [reload, setReload] = useState('');

  useEffect(() => {
    setLocalStorage();
  }, [reload]);

  const list = allVillas.filter((villa) => favoriteVillas
    .find((e) => e.includes(villa.villas_name)));

  const listYachts = allYachts.filter((yacht) => favoriteVillas
    .find((e) => e.includes(yacht.yachts_name)));

  return (
    isFetching ? <Loading type="bubbles" color="black" />
      : (
        <main className="wishlist-container">
          <MenuMobile />
          <MenuDesktop />
          <section className="wish-title">
            <MainTitle props={{ textColor: Colors.primaryColor }}>
              {languages(english, portuguese, spanish).title}
            </MainTitle>
          </section>
          <section className="wish-cards-container">
            {
            list.length > 0 || listYachts.length > 0
              ? wishCard(list, reload, setReload) : renderEmpty()
            }
          </section>
          <section className="wish-cards-container-yachts">
            {
             list.length > 0 || listYachts.length > 0
               ? wishCardYacht(listYachts, reload, setReload) : null
            }
          </section>
          <section className="wish-buttons">
            <DarkButton linkTo="/villas">
              {languages(english, portuguese, spanish).button1}
            </DarkButton>
            <DarkButton linkTo="/yachts">
              {languages(english, portuguese, spanish).button2}
            </DarkButton>
          </section>
          <DarkSection />
          <Footer />
        </main>
      )
  );
};

export default Wishlist;
