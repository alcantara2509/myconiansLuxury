/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import MLContext from './MLContext';
import { fecthVillas } from '../Services/fetchVillas';

function MLProvider({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [allVillas, setAllVillas] = useState([]);

  useEffect(() => {
    setIsFetching(true);

    (async () => {
      const apiResponse = await fecthVillas();
      setAllVillas(apiResponse);
      setIsFetching(false);
    })();
  }, []);

  const ContextValue = {
    isFetching,
    setIsFetching,
    allVillas,
    setAllVillas,
  };

  return (
    <MLContext.Provider value={ContextValue}>
      {children}
    </MLContext.Provider>
  );
}

export default MLProvider;
