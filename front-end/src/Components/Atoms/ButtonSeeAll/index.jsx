/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ButtonSeeAll = ({ btnProps }) => {
  const [classBtn, setClassBtn] = useState('seeAllBtn');
  const { allVillas, setSeeAll } = btnProps;
  return (
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
  );
};

export default ButtonSeeAll;
