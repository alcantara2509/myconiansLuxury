import React from 'react';
import { HamburgerMenuComp } from '../../Atoms';
import { logoSecondary } from '../../../assets';
import './style.css';

const MenuMobile = () => (
  <section className="menu-mobile-container">
    <section className="menu-mobile-content">
      <img src={logoSecondary} alt="logo" className="logo-menu-mobile" />
      <HamburgerMenuComp />
    </section>
  </section>
);

export default MenuMobile;
