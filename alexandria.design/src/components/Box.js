import React from 'react';

const Box = ({ boxNumber, bounceInNumber, imgSrc, altText }) => {
  const boxClass = `box${boxNumber}`;
  const bounceClass = `bounce-in${bounceInNumber}`;

  return (
    <div className={boxClass}>
      <div className={bounceClass}>
        <img src={imgSrc} alt={altText} width="100%" />
      </div>
    </div>
  );
};

export default Box;