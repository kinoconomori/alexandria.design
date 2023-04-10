import React from 'react';
import './css/ColorBoxText.css';

const ColorBoxText = ({ text }) => {
  return (
    <div className="box3">
      <div className="colorboxtext2">
        {text.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== text.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ColorBoxText;
