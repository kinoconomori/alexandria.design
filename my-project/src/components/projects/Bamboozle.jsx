import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox';
import Box from '../Box';
import Break from '../Break';
import SideBySideDescription from '../SideBySideDescription';

const Bamboozle = () => {
    const folder = 'bamboozle';

    const imageOrder = [
        "two",
        "three",
        "six",
        "logo",
        "four",
        "five",
        "seven"
    ];

    const renderBoxes = ({ handleImageClick }) => {
        let imageIndex = 0;
        let defaultBreakSpace = 4.6875;
        return (
            <>
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <DescriptionBox mainhead="Bamboozle" subhead="Packaging" text={[
                    ["The Amazing Mister Bamboozle has", <i>opened</i>, "up his marvelous workshop after years of experimentation, and you are invited to join in the fun! Open up the box and discover a world of mystery and wonder!", <br />, <br />, "Bamboozle is an imagined line of toys that play with the expectations of the audience. Although labelled simply as 'teddy bear' or 'doll', each of the toys are actually a frankensteined version of multiple toys reassembled together."]
                ]} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={defaultBreakSpace} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <SideBySideDescription text="Bamboozle's logo and identity is based on the idea of a playful patchwork quilt, with colors and patterns assembled together to hint at the idea of the reassembled toys and create excitement." />
                <Break height={defaultBreakSpace} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={defaultBreakSpace} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
            </>
        )
    };

    return (
        <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
    );
};

export default Bamboozle;
