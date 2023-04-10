import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox'
import Box from '../Box';
import Break from '../Break';

const Moco = () => {
  const folder = 'bear';

  const imageOrder = [
    'bear1',
    'bear2',
    'bear3',
    'bear4',
    'bear5',
    'bear6',
    'bear7',
    'bear8',
  ];

  const renderBoxes = ({ handleImageClick }) => {
    let imageIndex = 0;
    return (
      <>
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <DescriptionBox
          mainhead="Moco and the Mushroom"
          subhead="Picture Book"
          text={[
            'Moco and the Mushroom is a children’s book I wrote and illustrated.',
            'The story follows a small bear named Moco who grows a mushroom on his head and is teased by the other bears for it, but eventually finds out that all of the other bears were also hiding mushrooms.',
            'All illustrations are hand cut from paper and photographed to show dimension.'
          ]}
        />
        <Break />
        <Box boxNumber={2} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <Box boxNumber={2} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <Box boxNumber={2} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <Box boxNumber={2} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <Box boxNumber={2} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <Box boxNumber={2} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <Box boxNumber={2} imageIndex={imageIndex++} onClick={handleImageClick} />
      </>
    )
  };

  return (
    <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
  );
};

export default Moco;