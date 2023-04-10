import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox'
import Box from '../Box';
import Break from '../Break';

const MissionMag = () => {
    const folder = 'mm';

    const imageOrder = [
        'mm',
        'mm2',
        'mm3',
        'mm4',
        'mm5',
        'mm6',
        'mm7',
    ];

    const renderBoxes = ({ handleImageClick }) => {
        let imageIndex = 0;
        return (
            <>
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <DescriptionBox
                    mainhead="Mission Magazine"
                    subhead="Publication"
                    text={[
                        [
                            <br />,
                            'A biannual publication containing poetry by Mission High School students in an ongoing program with 826 Valencia.',
                            <br />,
                            <br />,
                        ],
                        [
                            'I was given the opportunity to design of both the interior and cover of the magazine. Certain design aspects, such as the black and white printing, type choices, and cover layout were based on previous issues designed by ',
                            <a href="https://alexkinoshita.com/" key="alex-link">Alex Kinoshita</a>,
                            ".",
                        ],
                        'A number of the poems were written in response to specific images that were included when necessary, and all other imagery I chose from stock image sites to pair with the writing.',
                    ]}
                />
                <Break />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={0.8} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={0.8} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={0.8} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={0.8} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={0.8} />
                <Box boxNumber={2} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={0.8} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
            </>
        )
    };

    return (
        <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
    );
};

export default MissionMag;