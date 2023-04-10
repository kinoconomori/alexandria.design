import React from 'react';
import './css/SideBySideDescription.css';

const SideBySideDescription = ({ text }) => {
  return (
    <div className="box3">
      <div className="descriptiontext2">
        {text}
        <br />
        <br />
      </div>
    </div>
  );
};

export default SideBySideDescription;
