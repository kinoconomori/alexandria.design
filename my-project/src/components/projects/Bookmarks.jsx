import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox';
import Box from '../Box';

const Bookmarks = () => {
    const folder = 'TLJ';

    const imageOrder = [
        "bm"
    ];

    const renderBoxes = ({handleImageClick}) => {
        let imageIndex = 0;
        let defaultBreakSpace = 4.6875;
        return (
            <>
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
<DescriptionBox mainhead="826 Valencia Bookmarks" subhead="Print Illustration" text={[
["Bookmarks illustrated by me to be passed out to students studying at the educational non-profit 826 Valencia. One design is aimed at younger students, the other at slightly older. Back side included a quote by each student."]
]} />
            </>
        )
    };

    return (
        <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
    );
};

export default Bookmarks;
