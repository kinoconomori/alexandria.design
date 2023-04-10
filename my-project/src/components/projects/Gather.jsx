import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox'
import Box from '../Box';
import Break from '../Break';
import SideBySideDescription from '../SideBySideDescription';

const Gather = () => {
    const folder = 'gather';

    const imageOrder = [
        'gatherhome',
        'icons',
        'gather3',
        'gather4',
        'four',
        'five',
        'seven',
    ];

    const renderBoxes = ({ handleImageClick }) => {
        let imageIndex = 0;
        let defaultBreakSpace = 4;
        return (
            <>
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <DescriptionBox
                    mainhead="Gather"
                    subhead="Web Design"
                    text={[
                        [
                            'Gather was an app-based even booking agent start-up. At Anagraph, we worked together with a web developer to design the website for Gather based on their existing brand guidelines.',
                            <br />,
                        ],
                        [
                            <b>Creative Director:</b>, " Indhira Rojas",
                            <br />,
                            <b>Designers:</b>, " Alma Avila, Alexandria Troup",
                            <br />,
                            <br />
                        ],
                    ]}
                />

                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <SideBySideDescription text={"I also created a number of vector icons for use on the site based on existing icons."} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={defaultBreakSpace} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={defaultBreakSpace} />
            </>
        )
    };

    return (
        <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
    );
};

export default Gather;