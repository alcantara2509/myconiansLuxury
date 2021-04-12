/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

export const MainTitle = ({ props, children }) => (
  <h2 className="main-title" style={{ color: props.textColor }}>
    {children}
  </h2>
);

export const ItalicHighlight = ({ props, children }) => (
  <h3 className="italic-highlight" style={{ color: props.textColor }}>
    {children}
  </h3>
);

export const ServicesHomeTitle = ({ props, children }) => (
  <h3 className="services-home-title" style={{ color: props.textColor }}>
    {children}
  </h3>
);

export const Paragraph = ({ props, children }) => (
  <p className="paragraph" style={{ color: props.textColor }}>
    {children}
  </p>
);

export const BannerTitle = ({ props, children }) => (
  <h1 className="banner-title" style={{ color: props.textColor }}>
    {children}
  </h1>
);
