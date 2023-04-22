import React from 'react';
import { bannerHome, logoBanner } from '../../../assets';
import './style.css';

const HomeBanner = () => (
  <section className="banner-container">
    <section className="background-banner-home" style={{ backgroundImage: `url(${bannerHome})` }}>
      <img src={logoBanner} alt="logo" className="logo-banner" />
    </section>
  </section>
);

export default HomeBanner;
