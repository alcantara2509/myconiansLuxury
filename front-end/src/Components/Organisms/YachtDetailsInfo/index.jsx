/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { IconsCardDetails } from '../../Atoms';
import { iconGuests, iconRooms, iconCrew } from '../../../assets';
import { MainTitle } from '../../Atoms/Texts';
import Colors from '../../../Colors';
import MLContext from '../../../Context/MLContext';
import languages from '../../../Utils/languages';
import { english, portuguese, spanish } from './languages';
import './style.css';

const VillaDetailsInfo = () => {
  const { allYachts } = useContext(MLContext);
  const YachtName = useLocation().pathname.slice(8);

  const yachtInfos = allYachts.find((e) => e.yachts_name === YachtName);

  return (
    <section className="infos-container-details">
      <MainTitle props={{ textColor: Colors.primaryColor }}>
        {YachtName}
        &apos;
      </MainTitle>
      {
        yachtInfos ? (
          <section className="icons-card-details-desktop-container">
            <IconsCardDetails iconsProps={{
              icon: iconGuests,
              info: yachtInfos.guests,
              type: languages(english, portuguese, spanish).type1,
            }}
            />
            <IconsCardDetails iconsProps={{
              icon: iconRooms,
              info: yachtInfos.cabins,
              type: languages(english, portuguese, spanish).type2,
            }}
            />
            <IconsCardDetails iconsProps={{
              icon: iconCrew,
              info: yachtInfos.crew,
              type: languages(english, portuguese, spanish).type3,
            }}
            />
          </section>
        ) : null
      }
    </section>
  );
};

export default VillaDetailsInfo;
