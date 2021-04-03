/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import MLContext from './MLContext';

function MLProvider({ children }) {
  const [isFetching, setIsFetching] = useState(false);

  const ContextValue = {
    isFetching,
    setIsFetching,
  };

  return (
    <MLContext.Provider value={ContextValue}>
      {children}
    </MLContext.Provider>
  );
}

export default MLProvider;
