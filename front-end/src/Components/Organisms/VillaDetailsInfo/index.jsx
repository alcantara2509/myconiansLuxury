/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { IconsCardDetails } from '../../Atoms';
import { iconGuests, iconRooms, iconBaths } from '../../../assets';
import { MainTitle } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import MLContext from '../../../Context/MLContext';
import './style.css';

const VillaDetailsInfo = () => {
  const { allVillas } = useContext(MLContext);
  const villaName = useLocation().pathname.slice(8);

  const villaInfos = allVillas.find((e) => e.villas_name === villaName);
  return (
    <section className="infos-container-details">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        villa
        {' '}
        {villaName}
      </MainTitle>
      {
        villaInfos ? (
          <section className="icons-card-details-desktop-container">
            <IconsCardDetails iconsProps={{ icon: iconGuests, info: villaInfos.guests, type: 'guests' }} />
            <IconsCardDetails iconsProps={{ icon: iconRooms, info: villaInfos.rooms, type: 'bedrooms' }} />
            <IconsCardDetails iconsProps={{ icon: iconBaths, info: villaInfos.baths, type: 'bathrooms' }} />
          </section>
        ) : null
      }
    </section>
  );
};

export default VillaDetailsInfo;
