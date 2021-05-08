/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useEffect, useState, useContext } from 'react';
import MLContext from '../../Context/MLContext';
import Loading from '../../Components/Atoms/Loading';
import {
  IslandCruises, MenuDesktop, MenuMobile, PagesBanner, BespokeServices,
} from '../../Components/Molecules';
import Footer from '../../Components/Organisms/Footer';
import { DarkSection, IntroVillas } from '../../Components/Organisms';
import bannerYachts from '../../assets/images/bannerYachts.jpg';
import renderYachts from '../../Utils/renderYachts';
import languages from '../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const Yachts = () => {
  const { isFetching, allYachts } = useContext(MLContext);
  const [reload, setReload] = useState('');

  console.log(allYachts);

  useEffect(() => {
    const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
    if (!favoriteVillas) localStorage.setItem('favoriteVillas', JSON.stringify([]));
  }, [reload]);

  return (
    isFetching ? <Loading type="bubbles" color="black" />
      : (
        <main className="villas-container">
          <MenuMobile />
          <MenuDesktop />
          <PagesBanner
            title={languages(english, portuguese, spanish).title}
            color="white"
            banner={bannerYachts}
            subTitle={languages(english, portuguese, spanish).subTitle}
          />
          <IntroVillas />
          {renderYachts(allYachts, setReload, reload)}
          <IslandCruises />
          <BespokeServices />
          <DarkSection />
          <Footer />
        </main>
      )
  );
};

export default Yachts;
