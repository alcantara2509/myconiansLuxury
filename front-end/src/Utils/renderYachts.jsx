import React from 'react';
import { VillaCards } from '../Components/Molecules';

const renderYachts = (allYachts, seeAll, setReload, reload) => (
  allYachts.slice(0, seeAll)
    .map((yacht) => {
      const cardProps = {
        image: yacht.cover,
        name: yacht.yachts_name,
        guests: yacht.guests,
        rooms: yacht.rooms,
        baths: yacht.baths,
        setReload,
        reload,
      };
      return (
        <VillaCards cardProps={cardProps} />
      );
    })
);

export default renderYachts;
