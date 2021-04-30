/* eslint-disable import/no-cycle */
import React from 'react';
import { Link } from 'react-router-dom';
import { logoSecondary } from '../../../assets';
import { MenuContent } from '../../Organisms';
import './style.css';

const MenuDesktop = () => (
  <section className="menu-desktop-container" id="top">
    <section className="menu-desktop-content">
      <Link to="/" className="link-logo-menu">
        <img src={logoSecondary} alt="logo" className="logo-menu-mobile" />
      </Link>
      <MenuContent toggle="menu-content-container-on" />
    </section>
  </section>
);

export default MenuDesktop;
