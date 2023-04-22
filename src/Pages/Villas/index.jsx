/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useEffect, useState, useContext } from 'react';
import MLContext from '../../Context/MLContext';
import Loading from '../../Components/Atoms/Loading';
import renderVillas from '../../Utils/renderVillas';
import { ButtonSeeAll } from '../../Components/Atoms';
import { MenuDesktop, MenuMobile, PagesBanner } from '../../Components/Molecules';
import Footer from '../../Components/Organisms/Footer';
import { DarkSection, IntroVillas } from '../../Components/Organisms';
import { setLocalStorage } from '../../Utils';
import bannerVillas from '../../assets/images/bannerVillas.jpg';
import languages from '../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const Villas = () => {
  const { isFetching, allVillas } = useContext(MLContext);
  const [seeAll, setSeeAll] = useState(10);
  const [reload, setReload] = useState('');

  useEffect(() => {
    setLocalStorage();
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
            banner={bannerVillas}
            subTitle={languages(english, portuguese, spanish).subTitle}
          />
          <IntroVillas />
          {renderVillas(allVillas, seeAll, setReload, reload)}
          <ButtonSeeAll btnProps={{ allVillas, setSeeAll }} />
          <DarkSection />
          <Footer />
        </main>
      )
  );
};

export default Villas;
