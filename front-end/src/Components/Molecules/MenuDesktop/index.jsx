/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { logoSecondary } from '../../../assets';
import { MenuContent } from '../../Organisms';
import {
  logoSecondary, iconArrowDownLanguage, iconFlagBr, iconFlagUsa, iconFlagSp,
} from '../../../assets';
import './style.css';

const MenuDesktop = () => {
  // const [menuToggle, setMenuToggle] = useState('menu-content-container');
  const [optionsContainer, setOptionsContainer] = useState('languages-options-container');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  // eslint-disable-next-line no-undef
  const currLanguage = JSON.parse(localStorage.getItem('language'));
  useEffect(() => {
    if (currLanguage) setSelectedLanguage(currLanguage);
  }, []);

  const handleClickLanguage = ({ target: { value } }) => {
    localStorage.setItem('language', JSON.stringify(value));
    setSelectedLanguage(value);
    window.location.reload();
  };

  const setFlag = () => {
    if (selectedLanguage === 'br') return iconFlagBr;
    return iconFlagUsa;
  };

  const setLanguage = () => (
    <section className="languages-select-container">
      <button
        type="button"
        className="links language-link"
        onClick={() => {
          if (optionsContainer === 'languages-options-container') {
            setOptionsContainer('languages-options-container-on');
          }
          if (optionsContainer === 'languages-options-container-on') {
            setOptionsContainer('languages-options-container');
          }
        }}
      >
        <img src={setFlag()} alt="icon" className="flag-menu-bar" />
        <img src={iconArrowDownLanguage} alt="icon" />
      </button>
      <section className={optionsContainer}>
        <button
          type="button"
          className={`${selectedLanguage === 'usa' ? 'languages-options-selected' : ''} languages-options`}
          onClick={handleClickLanguage}
          value="usa"
        >
          English (USA)
          <img src={iconFlagUsa} alt="icon" className="icon-flag" />
        </button>
        <button
          type="button"
          className={`${selectedLanguage === 'br' ? 'languages-options-selected' : ''} languages-options`}
          onClick={handleClickLanguage}
          value="br"
        >
          Português (BR)
          <img src={iconFlagBr} alt="icon" className="icon-flag" />
        </button>
        <button
          type="button"
          className={`${selectedLanguage === 'sp' ? 'languages-options-selected' : ''} languages-options`}
          onClick={handleClickLanguage}
          value="sp"
        >
          Spanish
          <img src={iconFlagSp} alt="icon" className="icon-flag" />
        </button>
      </section>
    </section>
  );

  return (
    <section className="menu-desktop-container" id="top">
      <section className="menu-desktop-content">
        <Link to="/" className="link-logo-menu">
          <img src={logoSecondary} alt="logo" className="logo-menu-mobile" />
        </Link>
        <MenuContent toggle="menu-content-container-on" lang={setLanguage()} />
      </section>
    </section>
  );
};

export default MenuDesktop;
