import React from 'react';
import { YachtCards } from '../Components/Molecules';

const renderYachts = (allYachts, setReload, reload) => (
  allYachts.map((yacht) => {
    const cardProps = {
      image: yacht.cover,
      name: yacht.yachts_name,
      guests: yacht.guests,
      cabins: yacht.cabins,
      crew: yacht.crew,
      setReload,
      reload,
    };
    return (
      <YachtCards cardProps={cardProps} />
    );
  })
);

export default renderYachts;
