import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox'
import Box from '../Box';
import Break from '../Break';

const Nandeyanen = () => {
  const folder = 'nandeyanen';

  const imageOrder = [
    'one',
    'three',
    'two',
    'four',
    'five',
    'seven',
    'eight',
    'six',
  ];

  const renderBoxes = ({ handleImageClick }) => {
    let imageIndex = 0;
    return (
      <>
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <DescriptionBox
          mainhead="Nandeyanen!"
          subhead="Print"
          text={[
            '“Nandeyanen” (なんでやねん) is a slang phrase from the Kansai region of Japan that translates to something like “What the hell!”',[
              <i>Nandeyanen</i>, ' is a scrapbook of my personal experiences studying abroad at Osaka University of Arts in spring 2017.'
            ]
          ]}
        />
        <Break />
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <DescriptionBox
          text={[
            'The book is comprised of a mix of printing techniques, including risograph and laser prints, as well as different paper colors, textures, and sizes.',
            'Many of the components are meant for the reader to touch and explore. Pullouts, removable items, and even a button activated sound recording of the Osaka train chimes are included to help immerse the reader in my experience.'
            
          ]}
        />
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break height={0.8}/>
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
      </>
    )
  };

  return (
    <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
  );
};

export default Nandeyanen;