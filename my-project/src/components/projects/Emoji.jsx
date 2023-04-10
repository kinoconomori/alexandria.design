import React from 'react';
import Projects from './Projects';

import DescriptionBox from '../DescriptionBox'
import Box from '../Box';
import Break from '../Break';
import SideBySideDescription from '../SideBySideDescription';

const Emoji = () => {
    const folder = 'emoji';

    const imageOrder = [
        '1',
        '8',
        '4',
        'emojis',
        '5',
        '7',
        '3-2',
        '3-1',
        '3'
    ];

    const renderBoxes = ({ handleImageClick }) => {
        let imageIndex = 0;
        let defaultBreakSpace = 4.6875;
        return (
            <>
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <DescriptionBox
                    mainhead="Emoji Set"
                    subhead="Social media elements can be utilized to help cross the communication boundaries created by mental illness."
                    text={[
                        'As someone who has struggled with mental illness, I have found that communication with others is always a particularly stressful and difficult task. It is even more difficult in times when it is needed most, but finding words is near impossible.',
                        "Social media elements, particularly emoji, seemed ideal as a bridge for this communication gap: simple yet expressive, and available to nearly everyone. I created a set of emojis that can be used between two people to better facilitate conversation about difficult feelings.",
                    ]}
                />
                <Break height={defaultBreakSpace} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <SideBySideDescription text={"Many people would like to open up about their mental health to someone close to them, and many others often want to provide support, but are not sure what is needed of them. The ultimate goal of this project is to strengthen the connection between people that are already close to each other and to alleviate communication anxiety."} />
                <Break height={defaultBreakSpace * 3} />
                <SideBySideDescription text={"Through a set of online surveys asking a few key questions about mental illness and communication, I noticed that there were common ideas that those suffering wanted others to know about them in a time of need. Positive feelings seemed to be quite easy for most to express, but it is the more negative feelings that seemed to be the most difficult."} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={defaultBreakSpace * 2} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <DescriptionBox
                    text={[
                        'The resulting emoji set contains a variety of emotions and accompanying symbols. Many of the symbols have to do with the location of the person, physical touch, or verbal/text communication.'
                    ]}
                />
                <Break height={defaultBreakSpace} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <SideBySideDescription text={"People experience feelings differently at different times, so each of the emotions come in 3 levels of color to show intensity."} />
                <Break height={defaultBreakSpace * 3} />
                <SideBySideDescription text={"The final key to using this emoji set is the inclusion of modifier symbols to connect the emojis together as if they were language. By combining both the emotions and symbols with these positive/negative indicators, a deeper meaning can be understood than just using the emoji alone."} />
                <Box boxNumber={3} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={defaultBreakSpace * 2} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Break height={defaultBreakSpace} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />
                <Box boxNumber={1} imageIndex={imageIndex++} onClick={handleImageClick} />  
            </>
        )
    };

    return (
        <Projects folder={folder} imageOrder={imageOrder} renderBoxes={renderBoxes} />
    );
};

export default Emoji;