/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactLoading from 'react-loading';
import { iconLogo } from '../../../assets';
import './style.css';

const Loading = ({ type }) => {
  const loadingSize = () => (window.innerWidth < 800 ? '24%' : '10%');

  return (
    <section className="loading-container">
      <img src={iconLogo} alt="logo" className="logo-loading" />
      <ReactLoading type={type} color="#1C3C45" height={loadingSize()} width={loadingSize()} />
    </section>
  );
};

export default Loading;
