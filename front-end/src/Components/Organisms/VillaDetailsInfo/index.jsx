/* eslint-disable react/prop-types */
import React from 'react';
import { IconsCard } from '../../Atoms';
import { iconGuests, iconRooms, iconBaths } from '../../../assets';
import { MainTitle } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import './style.css';

const VillaDetailsInfo = ({ villaInfos, name }) => {
  const {
    guests, rooms, baths,
  } = villaInfos;
  console.log(villaInfos);
  return (
    <section className="infos-container-details">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        {name}
      </MainTitle>
      <IconsCard iconsProps={{ icon: iconGuests, info: guests }} />
      <IconsCard iconsProps={{ icon: iconRooms, info: rooms }} />
      <IconsCard iconsProps={{ icon: iconBaths, info: baths }} />
    </section>
  );
};

export default VillaDetailsInfo;
