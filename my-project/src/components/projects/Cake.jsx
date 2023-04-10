// Cake.js
import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox'
import Box from '../Box';
import Break from '../Break';

const Cake = () => {
  const folder = 'cake';
  const imageOrder = [
    'cakeposters1_header',
    'cake2',
    'cake3',
    'cakeposters1',
    'cakeposters2',
    'cakepostersall',
    'cakeposterswall',
    'cakebook1',
    'cakebook2',
    'cakebook3',
    'cakebook4',
    'cakebook5',
  ];



  const renderBoxes = ({ handleImageClick }) => {
    let imageIndex = 0;
    return (
      <>
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <DescriptionBox
          mainhead="The Cake of my Dreams"
          subhead="Poster series + Book"
          text={[
            <br />,
            '826 Valencia partnered with local Mission District bakery Craftsman & Wolves to display excerpts of creative student writing about their dream cakes. As the design intern, I was tasked with creating a series of posters to hang on the wall inside of the bakery.',
          ]}
        />
        <Break height={1.4}/>
        <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />

        <Break height={6.0} />

        <DescriptionBox
          text={[
            'Because the student writing was filled with such imaginative and vivid imagery, I wanted a concept that could invoke the image of cake without relying on specific images so that each story is equally represented. I decided to focus on the bright colors and texture of cake, using acrylic paint to mimic dripping icing and using real sprinkles for detail.',
            'I initially sketched out ideal drip layouts, but the nature of dripping paint is quite unpredictable, so it took a lot of trial and error and different techniques that resulted in the final pieces. I then photographed the pieces and student text was digitally added.'
          ]}
        />
        <Break />
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break />
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break />

        <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Break />
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
        <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
      </>
    )
  };

  return (
    <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
  );
};

export default Cake;