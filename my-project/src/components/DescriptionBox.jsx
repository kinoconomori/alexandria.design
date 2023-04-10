import React from 'react';
import MainHeader from './MainHeader';
import './css/DescriptionBox.css';
import FormattedText from './FormattedText';

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
        {text.map((line, index) => (
          <p key={index} style={{ ...textStyle, marginBottom: index !== text.length - 1 ? '0.5em' : undefined }}>
            <FormattedText content={line} />
          </p>
        ))}
      </div>
    </div>
  );
};

export default DescriptionBox;
