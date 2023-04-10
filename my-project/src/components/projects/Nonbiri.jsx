import React from 'react';
import Projects from './Projects';
import Box from '../Box';

const Nonbiri = () => {
    const folder = 'nonbiri';

    const imageOrder = [
        "1",
        "2",
        "5",
        "6",
        "7",
        "3"
    ];

    const renderBoxes = ({ handleImageClick }) => {
        let imageIndex = 0;
        let defaultBreakSpace = 4.6875;
        return (
            <>
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
            </>
        )
    };

    return (
        <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
    );
};

export default Nonbiri;
