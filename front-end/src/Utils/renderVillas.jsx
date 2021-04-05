import React from 'react';
import VillaCards from '../Components/Molecules/Cards';

const renderVillas = (allVillas, seeAll, setReload, reload) => (
  allVillas.slice(0, seeAll)
    .map((villa) => {
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
        <VillaCards cardProps={cardProps} />
      );
    })
);

export default renderVillas;
