/* eslint-disable import/first */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import MLContext from '../../Context/MLContext';
import Loading from '../../Components/Atoms/Loading';
import { MenuMobile } from '../../Components/Molecules';
import { Footer, VillaDetailsInfo } from '../../Components/Organisms';
import {
  checkHeart, heartClick, imgError, setLocalStorage,
} from '../../Utils';
import { fetchVillaImages } from '../../Services/fetchVillas';
import 'react-alice-carousel/lib/alice-carousel.css';
import './style.css';

const VillaDetails = () => {
  const {
    isFetching, setAllImages, allImages, setIsFetching,
  } = useContext(MLContext);

  const [reload, setReload] = useState('');
  const villaName = useLocation().pathname.slice(8);

  useEffect(() => {
    setLocalStorage();
  }, [reload]);

  useEffect(() => {
    setIsFetching(true);
    (async () => {
      const apiResponseImg = await fetchVillaImages(villaName);
      setAllImages(apiResponseImg);
      setIsFetching(false);
    })();
  }, [villaName]);

  // const handleDragStart = (e) => e.preventDefault();

  const itens = () => allImages.map((image, id) => (
    <img
      key={id}
      className="image-size-details"
      src={image.url}
      onError={imgError}
      alt={image.id}
    />
  ));

  return (
    isFetching ? <Loading type="bubbles" color="black" />
      : (
        <main className="villas-container">
          <MenuMobile />
          <img src="" alt="villa cover" className="cover-size" onError={imgError} />

          <button
            className="fav-button"
            type="button"
            onClick={() => heartClick(villaName, reload, setReload)}
          >
            {checkHeart(villaName)}
          </button>
          <VillaDetailsInfo />
          <AliceCarousel items={itens()} disableDotsControls infinite />
          <Footer />
        </main>
      )
  );
};

export default VillaDetails;
