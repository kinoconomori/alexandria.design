import React from 'react';
import './css/Footer.css';
import { getRandomColor } from '../colorRandomizer';

const Footer = () => {
  const randomColor = getRandomColor();

  return (
    <div className="footer" style={{ backgroundColor: randomColor }}>
      Copyright 2022 Alexandria Troup
    </div>
  );
};

export default Footer;