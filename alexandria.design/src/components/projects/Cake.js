// src/components/Cake.js
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import DescriptionBox from '../DescriptionBox';
import Box from '../Box';
import { loadAllImages } from '../../imageLoader';

const Cake = () => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const imageMap = await loadAllImages('photos/cake');
      setImages(imageMap);
    };
    loadImages();
  }, []);

  return (
    <div className="invisible">
      <Navbar />
      <div className="boxes">
        <Box boxNumber={1} bounceInNumber={1}>
          <img src={images['cakeposters1']} alt="Cake posters 1" width="100%" />
        </Box>
        <DescriptionBox
          mainhead="The Cake of my Dreams"
          subhead="Poster series + Book"
          text={`826 Valencia partnered with local Mission District bakery Craftsman & Wolves to display excerpts of creative student writing about their dream cakes. As the design intern, I was tasked with creating a series of posters to hang on the wall inside of the bakery.`}
        />
        <div className="break"></div>

        {images['cake2'] && <Box boxNumber={3}><img src={images['cake2']} alt="Cake 2" width="100%" /></Box>}
        {images['cake3'] && <Box boxNumber={3}><img src={images['cake3']} alt="Cake 3" width="100%" /></Box>}

        <div className="break"></div>

        <DescriptionBox
          text={`Because the student writing was filled with such imaginative and vivid imagery, I wanted a concept that could invoke the image of cake without relying on specific images so that each story is equally represented. I decided to focus on the bright colors and texture of cake, using acrylic paint to mimic dripping icing and using real sprinkles for detail.

          I initially sketched out ideal drip layouts, but the nature of dripping paint is quite unpredictable, so it took a lot of trial and error and different techniques that resulted in the final pieces. I then photographed the pieces and student text was digitally added.`}
        />

        <div className="break"></div>

        {images['cakeposters1'] && <Box boxNumber={1} bounceInNumber={3}><img src={images['cakeposters1']} alt="Cake posters 1" width="100%" /></Box>}
        <div className="break"></div>
        {images['cakeposters2'] && <Box boxNumber={1} bounceInNumber={3}><img src={images['cakeposters2']} alt="Cake posters 2" width="100%" /></Box>}

        <div className="break"></div>

        {images['cakepostersall'] && <Box boxNumber={3} bounceInNumber={3}><img src={images['cakepostersall']} alt="Cake posters all" width="100%" /></Box>}
        {images['cakeposterswall'] && <Box boxNumber={3} bounceInNumber={3}><img src={images['cakeposterswall']} alt="Cake posters wall" width="100%" /></Box>}

        <div className="break"></div>

        <DescriptionBox
          text={`Because the student writing was filled with such imaginative and vivid imagery, I wanted a concept that could invoke the image of cake without relying on specific images so that each story is equally represented. I decided to focus on the bright colors and texture of cake, using acrylic paint to mimic dripping icing and using real sprinkles for detail.`}
          />
  
          <div className="break"></div>
  
          {['cakebook1', 'cakebook2', 'cakebook3', 'cakebook4', 'cakebook5'].map((imageKey, index) => (
            <React.Fragment key={index}>
              {images[imageKey] && (
                <Box boxNumber={1} bounceInNumber={3}>
                  <img src={images[imageKey]} alt={`Cake book ${index + 1}`} width="100%" />
                </Box>
              )}
              <div className="break"></div>
            </React.Fragment>
          ))}
  
          <div id="footnav">
            <div id="bottomnav" className="bottom-links"></div>
          </div>
  
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Cake;
  
