/* eslint-disable react/no-array-index-key */
import React from 'react';
import { VillaCards } from '../Components/Molecules';

const renderVillas = (allVillas, seeAll, setReload, reload) => (
  allVillas.slice(0, seeAll)
    .map((villa, id) => {
      const cardProps = {
        image: villa.cover,
        name: villa.villas_name,
        guests: villa.guests,
        rooms: villa.rooms,
        baths: villa.baths,
        setReload,
        reload,
      };
      return (
        <VillaCards key={id} cardProps={cardProps} />
      );
    })
);

export default renderVillas;
