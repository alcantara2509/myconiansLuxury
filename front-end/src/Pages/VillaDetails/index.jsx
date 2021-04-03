import React from 'react';
import { useLocation } from 'react-router-dom';

const VillaDetails = () => {
  const villaName = useLocation().pathname.slice(8);

  return (
    <h1>
      detalhe da vila
      {' '}
      {villaName}
    </h1>
  );
};

export default VillaDetails;
