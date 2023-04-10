import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox'
import Box from '../Box';
import Break from '../Break';
import ColorBoxText from '../ColorBoxText';

const Bamboozle = () => {
    const folder = 'kodomochi';

    const imageOrder = [
        'one',
        'kodomochianimate',
        'sketches',
        'sketches2',
        'sketches3',
        'type',
        'logos',
        'poster',
        'booklet',
        'shop',
        'train'
    ];

    const renderBoxes = ({ handleImageClick }) => {
        let imageIndex = 0;
        let defaultBreakSpace = 4;
        return (
            <>
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <DescriptionBox
                    mainhead="Kodomochi"
                    subhead="Shop Branding"
                    text={[[
                        <b>Kodomochi</b>, ' is an imagined mochi (Japanese rice cake) shop in Osaka, Japan. The name combines the words ',<i>kodomo</i>,' (child) and ', <i>mochi</i>,', as everyone is encouraged to play and build their own mochi monster as a child would.'
                    ]]}
                />  
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <ColorBoxText text={[
                        'The main motif used throughout is rounded forms to reflect the shape of hand molded mochi. With the theme of create-your-own mochi, the main imagery is of monsters, as the patrons are to ‘frankenstein’ together their own creation. Pink, yellow, and green are all taken from traditional colors of mochi flavors.',
                        'Unique Japanese letterforms used in the poster and brochure were created from craft glue to mimic the blobby and stretched texture of mochi.'
                ]}
                />
                <Break height={defaultBreakSpace} />
                <ColorBoxText text={[
                        'To contribute to the playful and imaginative theme of the shop, the monsters used in the imagery are all hand sketched.',
                        'When coming up with the logo, I felt that it was important to mimic the shape of mochi being stretched, as that is an iconic  attribute that makes mochi so fun and appealing to children. The shape doubles as a smile, emphasizing that creating and playing with mochi is an enjoyable experience.'
                ]}
                />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={defaultBreakSpace} />
                <ColorBoxText text={[
                        "The catchphrase 「みんなでつくろう」 (minna de tsukuro), translating to \"Let's make it together!\", is repeated throughout.",
                        'A brochure booklet includes information on mochi, including common ingredients, types, and information about the shop, including a menu of ingredients. All text is written in simple Japanese in order to be understood by both children and adults. Because Japanese advertising is still heavily print based, this brochure would be handed out in the streets as well as available inside the shop.'
                ]}
                />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={2 * defaultBreakSpace} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
            </>
        )
    };

    return (
        <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
    );
};

export default Bamboozle;