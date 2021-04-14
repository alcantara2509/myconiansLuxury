/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { IconsCard } from '../../Atoms';
import { iconGuests, iconRooms, iconBaths } from '../../../assets';
import { MainTitle } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import MLContext from '../../../Context/MLContext';
import './style.css';

const VillaDetailsInfo = () => {
  const { allVillas } = useContext(MLContext);
  const villaName = useLocation().pathname.slice(8);

  const villaInfos = allVillas.find((e) => e.villas_name === villaName);
  console.log(villaInfos);
  return (
    <section className="infos-container-details">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        {villaName}
      </MainTitle>
      {
        villaInfos ? (
          <>
            <IconsCard iconsProps={{ icon: iconGuests, info: villaInfos.guests }} />
            <IconsCard iconsProps={{ icon: iconRooms, info: villaInfos.rooms }} />
            <IconsCard iconsProps={{ icon: iconBaths, info: villaInfos.baths }} />
          </>
        ) : null
      }
    </section>
  );
};

export default VillaDetailsInfo;
