/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const DarkButton = ({ linkTo, children }) => (
  <Link to={linkTo} className="dark-button">
    {children}
  </Link>
);

export default DarkButton;
