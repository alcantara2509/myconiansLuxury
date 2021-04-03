/* eslint-disable react/prop-types */
import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height="26%" width="26%" />
);

export default Loading;
