/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fecthVillas } from '../Services/fetchVillas';
import HamburgerMenuComp from '../Components/Atoms/HamburgerMenu';
// import { MainTitle } from '../Components/Atoms/Texts';
import VillaCards from '../Components/Molecules/Cards';
import './Villas.css';

const Villas = () => {
  const [allVillas, setAllVillas] = useState([]);
  const [seeAll, setSeeAll] = useState(10);
  const [classBtn, setClassBtn] = useState('seeAllBtn');

  useEffect(() => {
    const fecthVillasComp = async () => {
      const apiResponse = await fecthVillas();
      setAllVillas(apiResponse);
    };
    fecthVillasComp();
  }, []);

  return (
    <main className="villas-container">
      <HamburgerMenuComp />
      {
        allVillas.slice(0, seeAll)
          .map((villa) => {
            const cardProps = {
              image: villa.cover,
              name: villa.villas_name,
              guests: villa.guests,
              rooms: villa.rooms,
              baths: villa.baths,
            };
            return (
              <Link to={`/${villa.villas_name}`}>
                <VillaCards cardProps={cardProps} />
              </Link>
            );
          })
      }
      <button
        type="button"
        className={classBtn}
        onClick={() => {
          setSeeAll(allVillas.length);
          setClassBtn('seeAllBtnDisable');
        }}
      >
        ver todas

      </button>
    </main>
  );
};

export default Villas;
