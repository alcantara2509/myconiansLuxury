/* eslint-disable import/first */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import MLContext from '../../Context/MLContext';
import Loading from '../../Components/Atoms/Loading';
import { MenuDesktop, MenuMobile } from '../../Components/Molecules';
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
  const [cover, setCover] = useState('');
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

  useEffect(() => {
    const getCover = () => {
      const cvr = allImages.find((e) => e.url.includes('Cover'));
      if (cvr) {
        setCover(cvr);
      }
    };

    getCover();
  }, [allImages]);
  console.log(allImages);

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
        <main className="villa-details-container">
          <MenuMobile />
          <MenuDesktop />
          <section className="villa-details-cover-container">
            {
              cover
                ? <img src={cover.url} alt="villa cover" className="cover-size" onError={imgError} />
                : <img src="" alt="villa cover" className="cover-size" onError={imgError} />
            }
          </section>
          <section className="fav-button-villa-details">
            <button
              className="fav-button"
              type="button"
              onClick={() => heartClick(villaName, reload, setReload)}
            >
              {checkHeart(villaName)}
            </button>
          </section>
          <VillaDetailsInfo />
          <AliceCarousel items={itens()} disableDotsControls infinite />
          <Footer />
        </main>
      )
  );
};

export default VillaDetails;
