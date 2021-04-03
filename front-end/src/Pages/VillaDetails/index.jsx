/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fecthVillasImages } from '../../Services/fetchVillas';
import MLContext from '../../Context/MLContext';
import Loading from '../../Components/Atoms/Loading';
import { replaceImage } from '../../assets';
// import './style.css';

const VillaDetails = () => {
  const { isFetching, setIsFetching } = useContext(MLContext);
  const villaName = useLocation().pathname.slice(8);
  const [allImages, setAllImages] = useState([]);
  console.log(allImages);

  useEffect(() => {
    setIsFetching(true);
    const fecthVillasComp = async () => {
      const apiResponse = await fecthVillasImages(villaName);
      setAllImages(apiResponse);
      setIsFetching(false);
    };
    fecthVillasComp();
  }, []);

  const imgError = ({ target }) => {
    target.src = replaceImage;
  };

  return (
    isFetching ? <Loading type="bubbles" color="black" />
      : (
        <main className="villas-container">
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
        </main>
      )
  );
};

export default VillaDetails;
