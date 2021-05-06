/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenuComp } from '../../Atoms';
import {
  logoSecondary, iconArrowDownLanguage, iconFlagBr, iconFlagUsa, iconFlagSp,
} from '../../../assets';
import { MenuContent } from '../../Organisms';
import './style.css';

const MenuMobile = () => {
  const [menuToggle, setMenuToggle] = useState('menu-content-container');
  const [optionsContainer, setOptionsContainer] = useState('languages-options-container');

  const handleClickToggle = () => {
    if (menuToggle === 'menu-content-container') {
      setMenuToggle('menu-content-container-on');
    }
    if (menuToggle === 'menu-content-container-on') {
      setMenuToggle('menu-content-container');
    }
  };

  const lang = () => (
    <section className="languages-select-container">
      <button
        type="button"
        className="links"
        onClick={() => {
          if (optionsContainer === 'languages-options-container') {
            setOptionsContainer('languages-options-container-on');
          }
          if (optionsContainer === 'languages-options-container-on') {
            setOptionsContainer('languages-options-container');
          }
        }}
      >
        languages
        {' '}
        <img src={iconArrowDownLanguage} alt="icon" />
      </button>
      <section className={optionsContainer}>
        <button type="button" className="languages-options">
          English (USA)
          <img src={iconFlagUsa} alt="icon" className="icon-flag" />
        </button>
        <button type="button" className="languages-options">
          Português (BR)
          <img src={iconFlagBr} alt="icon" className="icon-flag" />
        </button>
        <button type="button" className="languages-options">
          Spain
          <img src={iconFlagSp} alt="icon" className="icon-flag" />
        </button>
      </section>
    </section>
  );

  return (
    <section className="menu-mobile-container" id="top">
      <section className="menu-mobile-content">
        <Link to="/" className="link-logo-menu">
          <img src={logoSecondary} alt="logo" className="logo-menu-mobile" />
        </Link>
        <button type="button" className="menu-hamb-btn" onClick={handleClickToggle}>
          <HamburgerMenuComp />
        </button>
      </section>
      <MenuContent toggle={menuToggle} lang={lang()} />
    </section>
  );
};

export default MenuMobile;
