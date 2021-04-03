/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useEffect, useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import { fecthVillas } from '../../Services/fetchVillas';
import HamburgerMenuComp from '../../Components/Atoms/HamburgerMenu';
// import { MainTitle } from '../Components/Atoms/Texts';
import VillaCards from '../../Components/Molecules/Cards';
import MLContext from '../../Context/MLContext';
import Loading from '../../Components/Atoms/Loading';
import './style.css';

const Villas = () => {
  const { isFetching, setIsFetching } = useContext(MLContext);

  const [allVillas, setAllVillas] = useState([]);
  const [seeAll, setSeeAll] = useState(10);
  const [classBtn, setClassBtn] = useState('seeAllBtn');

  useEffect(() => {
    setIsFetching(true);
    const fecthVillasComp = async () => {
      const apiResponse = await fecthVillas();
      setAllVillas(apiResponse);
      setIsFetching(false);
    };
    fecthVillasComp();

    const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
    if (!favoriteVillas) localStorage.setItem('favoriteVillas', JSON.stringify([]));
  }, []);

  return (
    isFetching ? <Loading type="bubbles" color="black" />
      : (
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
                 <VillaCards cardProps={cardProps} />
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
      )
  );
};

export default Villas;
