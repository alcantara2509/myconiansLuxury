/* eslint-disable react/prop-types */
import React from 'react';
import { BannerSubTitle, BannerTitle } from '../../Atoms/Texts';
import './style.css';

const PagesBanner = ({
  title, color, banner, id, subTitle,
}) => (
  <section className="banner-container">
    <section className="background-banner" id={id} style={{ backgroundImage: `url(${banner})` }}>
      <section className="banner-info">
        <BannerTitle props={{ textColor: color }}>
          {title}
        </BannerTitle>
        <section className="banner-sub-container">
          <BannerSubTitle props={{ textColor: color }}>
            {subTitle}
          </BannerSubTitle>
        </section>
      </section>
    </section>
  </section>
);

export default PagesBanner;
