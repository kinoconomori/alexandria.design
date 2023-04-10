import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox';
import Box from '../Box';
import Break from '../Break';
import SideBySideDescription from '../SideBySideDescription';

const Shojo = () => {
    const folder = 'shojo';

    const imageOrder = [
        "1",
        "4",
        "7",
        "6",
        "3",
        "5"
    ];

    const renderBoxes = ({ handleImageClick }) => {
        let imageIndex = 0;
        let defaultBreakSpace = 4.6875;
        return (
            <>
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <DescriptionBox mainhead="Shōjō Sake" subhead="Packaging" text={[
                    ["Along the mountainous coasts of Japan lives a race of ape-like, intelligent, red-haired sea spirits known as", <i>shōjō</i>,". ", <i>Shōjō</i>," spend their lives playing in the sea and on the sand, drinking large quantities of alcohol. They revel in drunken silliness, singing, dancing, and enjoying life."],
                    ["An imagined brand of genshu sake centered around the myth of the Japanese shōjō, named after said creature."]
                ]} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <SideBySideDescription text="As a contrast between the old and the modern, the image of the shōjō is depicted by an orangutan dressed as a Japanese salaryman, as salarymen can often be found red-faced and drunk around train stations.Warped red lines fan out from behind the ape as a reference to the symbolic crazy red hair of the shōjō as well as convey drunken stupor.Included in a gift set is a set of sake cups wrapped like a traditional Japanese furoshiki." />
                <Break height={defaultBreakSpace} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={defaultBreakSpace} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={defaultBreakSpace} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
            </>
        )
    };

    return (
        <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
    );
};

export default Shojo;
