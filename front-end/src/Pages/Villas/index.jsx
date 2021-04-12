/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useEffect, useState, useContext } from 'react';
import MLContext from '../../Context/MLContext';
import Loading from '../../Components/Atoms/Loading';
import renderVillas from '../../Utils/renderVillas';
import { ButtonSeeAll } from '../../Components/Atoms';
import { MenuMobile, PagesBanner } from '../../Components/Molecules';
import Footer from '../../Components/Organisms/Footer';
import { DarkSection, IntroVillas } from '../../Components/Organisms';
import './style.css';
import { defaultText } from '../../Components/Organisms/DarkSection/texts';

const Villas = () => {
  const { isFetching, allVillas } = useContext(MLContext);

  const [seeAll, setSeeAll] = useState(10);
  const [reload, setReload] = useState('');

  useEffect(() => {
    const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
    if (!favoriteVillas) localStorage.setItem('favoriteVillas', JSON.stringify([]));
  }, [reload]);

  return (
    isFetching ? <Loading type="bubbles" color="black" />
      : (
        <main className="villas-container">
          <MenuMobile />
          <PagesBanner title="luxury villas" color="white" />
          <IntroVillas />
          {renderVillas(allVillas, seeAll, setReload, reload)}
          <ButtonSeeAll btnProps={{ allVillas, setSeeAll }} />
          <DarkSection title={defaultText.title} paragraph={defaultText.paragraph} />
          <Footer />
        </main>
      )
  );
};

export default Villas;
