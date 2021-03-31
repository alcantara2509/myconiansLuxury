/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { fecthVillas } from '../Services/fetchVillas';
import HamburgerMenuComp from '../Components/Atoms/HamburgerMenu';
import { MainTitle } from '../Components/Atoms/Texts';

const Villas = () => {
  const [allVillas, setAllVillas] = useState([]);

  useEffect(() => {
    const fecthVillasComp = async () => {
      const apiResponse = await fecthVillas();
      setAllVillas(apiResponse);
    };

    fecthVillasComp();
  }, []);
  console.log(allVillas);
  return (
    <>
      <HamburgerMenuComp />
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        {
          allVillas.map((villa) => (
            <section key={villa.villas_name}>
              <img
                style={{ width: '280px' }}
                src={villa.cover}
                alt={villa.villa_name}
              />
              <MainTitle>
                Villa
                {' '}
                {villa.villas_name}
              </MainTitle>
            </section>
          ))
        }
      </section>
    </>
  );
};

export default Villas;
