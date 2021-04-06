/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

export const MainTitle = ({ props, children }) => {
  console.log(props.textColor);
  console.log(children);
  return (
    <h1 className="main-title" style={{ color: props.textColor }}>
      {children}
    </h1>
  );
};

export const SubTitle = (children) => (
  <h1 className="sub-title">
    {children}
  </h1>
);
