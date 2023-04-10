import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox';
import Box from '../Box';

const Tenderloin = () => {
    const folder = 'TLJ';

    const imageOrder = [
        "tlj1",
        "tlj2",
        "tlj3",
        "tlj4"
    ];

    const renderBoxes = ({ handleImageClick }) => {
        let imageIndex = 0;
        let defaultBreakSpace = 4.6875;
        return (
            <>
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <DescriptionBox mainhead="826 Valencia Tenderloin Journal" subhead="Print Book" text={[
                    ["826 Valencia is a non-profit organization that tutors children in reading and writing, and regularly publishes books with children's writing.  I created all illustrations for the front cover and inside the book, including spot illustrations and pattern pages based on story ideas written by the children in the program. Pages were typeset based on existing 826 Valencia brand guidelines."]
                ]} />
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

export default Tenderloin;
