import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox';
import Box from '../Box';

const Pattern = () => {
    const folder = 'illustration';

    const imageOrder = [
        "pattern1",
        "treepattern",
        "hat",
        "moon",
        "wool",
        "pattern2",
        "pattern3"
    ];

    const renderBoxes = ({ handleImageClick }) => {
        let imageIndex = 0;
        let defaultBreakSpace = 4.6875;
        return (
            <>
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <DescriptionBox mainhead="Patterns" text={[

                ]} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
            </>
        )
    };

    return (
        <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
    );
};

export default Pattern;
