import React from 'react';
import MainHeader from './MainHeader';
import './css/DescriptionBox.css';

const DescriptionBox = ({ mainhead, subhead, text, mainheadStyle, subheadStyle, textStyle }) => {
  return (
    <div className="descriptionbox">
      <div className="descriptiontext">
        {mainhead && (
          <MainHeader text={mainhead} customStyle={mainheadStyle} />
        )}
        {subhead && (
          <p className="subhead" style={subheadStyle}>{subhead}</p>
        )}
        <p style={textStyle}>{text}</p>
      </div>
    </div>
  );
};

export default DescriptionBox;