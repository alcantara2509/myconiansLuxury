/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useEffect, useState, useContext } from 'react';
import MLContext from '../../Context/MLContext';
import Loading from '../../Components/Atoms/Loading';
import { ButtonSeeAll } from '../../Components/Atoms';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import Footer from '../../Components/Organisms/Footer';
import { DarkSection, IntroVillas } from '../../Components/Organisms';
import { defaultText } from '../../Components/Organisms/DarkSection/texts';
import bannerYachts from '../../assets/images/bannerYachts.jpg';
import './style.css';
import renderYachts from '../../Utils/renderYachts';

const Yachts = () => {
  const { isFetching, allYachts } = useContext(MLContext);
  const [seeAll, setSeeAll] = useState(10);
  const [reload, setReload] = useState('');

  console.log(allYachts);

  useEffect(() => {
    const favoriteYachts = JSON.parse(localStorage.getItem('favoriteYachts'));
    if (!favoriteYachts) localStorage.setItem('favoriteYachts', JSON.stringify([]));
  }, [reload]);

  return (
    isFetching ? <Loading type="bubbles" color="black" />
      : (
        <main className="villas-container">
          <MenuMobile />
          <MenuDesktop />
          <PagesBanner
            title="luxury Yachts"
            color="white"
            banner={bannerYachts}
            subTitle="Making the best of the finest luxury tailor-made vacation, guaranteed."
          />
          <IntroVillas />
          {renderYachts(allYachts, seeAll, setReload, reload)}
          <ButtonSeeAll btnProps={{ allYachts, setSeeAll }} />
          <DarkSection title={defaultText.title} paragraph={defaultText.paragraph} />
          <Footer />
        </main>
      )
  );
};

export default Yachts;
