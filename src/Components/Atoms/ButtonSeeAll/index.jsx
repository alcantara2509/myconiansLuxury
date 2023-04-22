/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import languages from '../../../Utils/languages';
import './style.css';

const ButtonSeeAll = ({ btnProps }) => {
  const [classBtn, setClassBtn] = useState('seeAllBtn');
  const { allVillas, setSeeAll } = btnProps;
  const portuguese = 'ver todas as vilas';
  const english = 'see all vilas';
  const spanish = 'see all vilas';
  return (
    <button
      type="button"
      className={classBtn}
      onClick={() => {
        setSeeAll(allVillas.length);
        setClassBtn('seeAllBtnDisable');
      }}
    >
      {languages(english, portuguese, spanish)}
    </button>
  );
};

export default ButtonSeeAll;
