import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox';
import Box from '../Box';

const Type36 = () => {
    const folder = 'illustration';

    const imageOrder = [
        "36type"
    ];

    const renderBoxes = ({ handleImageClick }) => {
        let imageIndex = 0;
        let defaultBreakSpace = 4.6875;
        return (
            <>
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <DescriptionBox mainhead="36 Days of Type" subhead="Illustration" text={[
                    ["Based on the 36 Days of Type challenge on Instagram, this is a project where I create one illustration a day based on the alphabet and numbers."]
                ]} />
            </>
        )
    };

    return (
        <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
    );
};

export default Type36;
