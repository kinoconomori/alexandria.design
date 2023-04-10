import React from 'react';
import { getRandomColor } from '../colorRandomizer';
import './css/MainHeader.css';

const MainHeader = ({ text }) => {
  const color = getRandomColor();

  const headerStyle = {
    textAlign: 'center',
    color: color,
  };

  return <p className="mainhead" style={headerStyle}>{text}</p>;
};

export default MainHeader;