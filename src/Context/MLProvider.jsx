/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import MLContext from "./MLContext";
import { fetchVillas } from "../Services/fetchVillas";
import { fetchYachts } from "../Services/fetchYachts";

function MLProvider({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [allVillas, setAllVillas] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [allYachts, setAllYachts] = useState([]);

  useEffect(() => {
    setIsFetching(true);

    (async () => {
      const apiResponse = await fetchVillas();
      setAllVillas(apiResponse);
      setIsFetching(false);
    })();
  }, []);

  useEffect(() => {
    setIsFetching(true);

    (async () => {
      const apiResponseY = await fetchYachts();
      setAllYachts(apiResponseY);
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
    allYachts,
    setAllYachts,
  };

  return (
    <MLContext.Provider value={ContextValue}>{children}</MLContext.Provider>
  );
}

export default MLProvider;
