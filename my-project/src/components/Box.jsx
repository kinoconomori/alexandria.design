import React, { useContext } from 'react';
import './css/Box.css';
import ImageContext from '../ImageContext';

const Box = ({ boxNumber, imageIndex, onClick }) => {
  const { images, imageOrder } = useContext(ImageContext);
  const imageKey = imageOrder[imageIndex];
  const imgSrc = images[imageKey];

  const boxClass = `box${boxNumber}`;

  // Helper function to generate a random number within a specified range
  const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  // Generate random values for animation properties
  const randomAnimationDuration = getRandom(0.7, 1.1);
  const randomAnimationDelay = getRandom(0.08, 0.14);

  // Apply the random values to the bounce-in animation
  const bounceStyle = {
    animation: `bounceIn ${randomAnimationDuration}s forwards`,
    animationFillMode: 'both',
    animationDelay: `${randomAnimationDelay}s`,
  };

  return (
    <div className={boxClass}>
      <div style={bounceStyle}>
        <img src={imgSrc} alt="" width="100%" onClick={() => onClick(imageIndex)} />
      </div>
    </div>
  );
};

export default Box;