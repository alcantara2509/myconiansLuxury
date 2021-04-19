/* eslint-disable react/prop-types */
import React from 'react';
import { MainTitle } from '../../Atoms/Texts';
import './style.css';

const PagesBanner = ({ title, color, banner }) => (
  <section className="banner-container">
    <section className="background-banner" style={{ backgroundImage: `url(${banner})` }}>
      <section className="banner-info">
        <MainTitle props={{ textColor: color }}>
          {title}
        </MainTitle>
      </section>
    </section>
  </section>
);

export default PagesBanner;
