/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import MLContext from './MLContext';
import { fetchVillas } from '../Services/fetchVillas';

function MLProvider({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [allVillas, setAllVillas] = useState([]);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    setIsFetching(true);

    (async () => {
      const apiResponse = await fetchVillas();
      setAllVillas(apiResponse);
      setIsFetching(false);
    })();
  }, []);

  const ContextValue = {
    isFetching,
    setIsFetching,
    allVillas,
    setAllVillas,
    allImages,
    setAllImages,
  };

  return (
    <MLContext.Provider value={ContextValue}>
      {children}
    </MLContext.Provider>
  );
}

export default MLProvider;
