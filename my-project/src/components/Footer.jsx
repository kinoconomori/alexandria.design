import React from 'react';
import './css/Footer.css';
import { getRandomColor } from '../colorRandomizer';

const Footer = () => {
  const randomColor = getRandomColor();

  return (
    <div className="footer" style={{ backgroundColor: randomColor }}>
      <div className="footer-container">
        <div className="footer-left">
          <li>Instagram</li>
          <li>LinkedIn</li>
        </div>
        <div className="footer-right">
          <li>
            © 2023 Alexandria Troup
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
