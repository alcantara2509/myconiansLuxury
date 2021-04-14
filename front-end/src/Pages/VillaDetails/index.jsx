/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MLContext from '../../Context/MLContext';
import Loading from '../../Components/Atoms/Loading';
import { MenuMobile } from '../../Components/Molecules';
import { Footer, VillaDetailsInfo } from '../../Components/Organisms';
import { checkHeart, heartClick, imgError } from '../../Utils';
import { fetchVillaImages } from '../../Services/fetchVillas';
import './style.css';

const VillaDetails = () => {
  const {
    isFetching, setAllImages, allImages, setIsFetching,
  } = useContext(MLContext);

  const [reload, setReload] = useState('');

  const villaName = useLocation().pathname.slice(8);

  useEffect(() => {
    setIsFetching(true);
    (async () => {
      const apiResponseImg = await fetchVillaImages(villaName);
      setAllImages(apiResponseImg);
      setIsFetching(false);
    })();
  }, [villaName]);

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
          {
            allImages.map((image, id) => (
              <img
                key={id}
                className="image-size"
                src={image.url}
                onError={imgError}
                alt={image.id}
              />
            ))
          }
          <Footer />
        </main>
      )
  );
};

export default VillaDetails;
