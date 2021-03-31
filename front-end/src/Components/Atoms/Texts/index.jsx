/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

export const MainTitle = ({ children }) => (
  <h1 className="main-title">
    {children}
  </h1>
);

export const SubTitle = (children) => (
  <h1 className="sub-title">
    {children}
  </h1>
);
