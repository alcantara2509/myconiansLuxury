/* eslint-disable react/prop-types */
import React from 'react';
import { bannerHome } from '../../../assets';
import { MainTitle } from '../../Atoms/Texts';
import './style.css';

const PagesBanner = ({ title, color }) => (
  <section className="banner-container">
    <section className="background-banner" style={{ backgroundImage: `url(${bannerHome})` }}>
      <section className="banner-info">
        <MainTitle props={{ textColor: color }}>
          {title}
        </MainTitle>
      </section>
    </section>
  </section>
);

export default PagesBanner;
