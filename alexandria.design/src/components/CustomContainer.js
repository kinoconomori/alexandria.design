import React from 'react';
import './css/CustomContainer.css';
import { Link } from 'react-router-dom';

const CustomContainer = ({ imgSrc, text, to, overlayColor, projectId }) => {
    return (
      <div className="container">
        <Link to={to}>
          <img src={imgSrc} alt={text} className="image" />
          <div className="overlay" style={{ backgroundColor: overlayColor }}>
            <div className="text">{text}</div>
          </div>
        </Link>
      </div>
    );
  };
  
  export default CustomContainer;