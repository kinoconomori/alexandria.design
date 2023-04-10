import React, { useState, useEffect, useRef } from 'react';
import Play from './Play';
import Break from './Break';
import CustomContainer from './CustomContainer';
import MainHeader from './MainHeader';
import { loadImageDict } from '../imageLoader';

import projects from './res/data/projects.json';
import illustration from './res/data/illustration.json';
import './css/MainContent.css';

const MainContent = ({ scrollToRef }) => {
  const colors = ['#ee4b38', '#31a676', '#77cdd7', '#f1bc3e'];
  const [projectImages, setProjectImages] = useState({});
  const [illustrationImages, setIllustrationImages] = useState({});
  const designRef = useRef(null);
  const illustrationRef = useRef(null);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const getColor = (index) => {
    return colors[index % colors.length];
  };

  shuffleArray(colors);

  useEffect(() => {
    const fetchImages = async () => {
      const projectImageDict = await loadImageDict(projects);
      const illustrationImageDict = await loadImageDict(illustration);
      console.log(projects);
      console.log('Project Images:', projectImageDict);
      console.log('Illustration Images:', illustrationImageDict);
      setProjectImages(projectImageDict);
      setIllustrationImages(illustrationImageDict);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (scrollToRef === "design" && designRef.current) {
      designRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollToRef === "illustration" && illustrationRef.current) {
      illustrationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToRef]);

  return (
    <div>
      <div className="bounce-in">
        <Play />
        <Break />
      </div>

      <div id="design" className="content" ref={designRef}>
        {projects.map((item, index) => (
          <CustomContainer
            key={item.id}
            imgSrc={projectImages[item.id]}
            text={item.text}
            to={item.href}
            overlayColor={getColor(index)}
          />
        ))}
      </div>
      <Break />
      <Break />
      <MainHeader text={"Illustration"} />
      <Break />

      <div id="illustration" className="content" ref={illustrationRef}>
        {illustration.map((item, index) => (
          <CustomContainer
            key={item.id}
            imgSrc={illustrationImages[item.id]}
            text={item.text}
            to={item.href}
            overlayColor={getColor(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;