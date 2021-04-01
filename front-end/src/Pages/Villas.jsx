/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { fecthVillas } from '../Services/fetchVillas';
import HamburgerMenuComp from '../Components/Atoms/HamburgerMenu';
// import { MainTitle } from '../Components/Atoms/Texts';
import VillaCards from '../Components/Molecules/Cards';

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
    <main className="villas-container">
      <HamburgerMenuComp />
      {
        allVillas.map((villa) => {
          const cardProps = {
            image: villa.cover,
            name: villa.villas_name,
            guests: villa.guests,
            rooms: villa.rooms,
            baths: villa.baths,
          };
          return (
            <VillaCards cardProps={cardProps} />
          );
        })
      }
    </main>
  );
};

export default Villas;
