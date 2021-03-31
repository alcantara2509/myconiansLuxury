/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { fecthVillas } from '../Services/fetchVillas';
import HamburgerMenuComp from '../Components/Atoms/HamburgerMenu';

const Villas = () => {
  const [allVillas, setAllVillas] = useState([]);

  useEffect(() => {
    const fecthVillasComp = async () => {
      const apiResponse = await fecthVillas();
      setAllVillas(apiResponse);
    };

    fecthVillasComp();
  }, []);

  return (
    <>
      <HamburgerMenuComp />
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        {
          allVillas.map((villa) => (
            <img
              key={villa.villas_name}
              style={{ width: '280px' }}
              src={villa.cover}
              alt={villa.villa_name}
            />
          ))
        }
      </section>
    </>
  );
};

export default Villas;
