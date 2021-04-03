/* eslint-disable no-console */
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fecthVillas } from '../../Services/fetchVillas';
import HamburgerMenuComp from '../../Components/Atoms/HamburgerMenu';
// import { MainTitle } from '../Components/Atoms/Texts';
import VillaCards from '../../Components/Molecules/Cards';
import MLContext from '../../Context/MLContext';
import './style.css';

const Villas = () => {
  const { isFetching, setIsFetching } = useContext(MLContext);
  console.log(isFetching);

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
  }, []);

  return (
    isFetching ? <h1>carregando</h1>
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
                 <Link to={`/villas/${villa.villas_name}`}>
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
      )
  );
};

export default Villas;
