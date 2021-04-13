/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fecthVillasImages } from '../../Services/fetchVillas';
import MLContext from '../../Context/MLContext';
import Loading from '../../Components/Atoms/Loading';
import { replaceImage } from '../../assets';
import './style.css';
import { MenuMobile } from '../../Components/Molecules';
import { Footer, VillaDetailsInfo } from '../../Components/Organisms';
import { checkHeart, heartClick } from '../../Utils';

const VillaDetails = () => {
  const { isFetching, setIsFetching, allVillas } = useContext(MLContext);
  const villaName = useLocation().pathname.slice(8);
  const [allImages, setAllImages] = useState([]);
  const [villaCover, setVillaCover] = useState('');
  const [villaInfos, setVillaInfos] = useState('');
  const [reload, setReload] = useState('');

  console.log(villaInfos);

  useEffect(() => {
    setIsFetching(true);
    const fecthVillasComp = async () => {
      const apiResponse = await fecthVillasImages(villaName);
      setAllImages(apiResponse);
      setIsFetching(false);
    };
    fecthVillasComp();

    const findCover = allVillas.find((e) => e.villas_name === villaName);
    if (findCover) {
      setVillaInfos(findCover);
      setVillaCover(findCover.cover);
    }
  }, []);

  const imgError = ({ target }) => {
    target.src = replaceImage;
  };

  return (
    isFetching ? <Loading type="bubbles" color="black" />
      : (
        <main className="villas-container">
          <MenuMobile />
          <img src={villaCover} alt="villa cover" className="cover-size" onError={imgError} />

          <button
            className="fav-button"
            type="button"
            onClick={({ target: { alt } }) => heartClick(alt, reload, setReload)}
          >
            {checkHeart(villaInfos.villas_name)}
          </button>
          <VillaDetailsInfo villaInfos={villaInfos} name={villaName} />
          <h1>{villaName}</h1>
          {
            allImages.map((image) => (
              <img
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
