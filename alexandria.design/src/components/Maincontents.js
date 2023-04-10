import React, { useState, useEffect } from 'react';
import Play from './Play';
import Break from './Break';
import CustomContainer from './CustomContainer';
import MainHeader from './MainHeader';
import { loadImages } from '../imageLoader';

import projects from './res/data/projects.json';
import illustration from './res/data/illustration.json';
import './css/MainContent.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cake from './projects/Cake';

const MainContent = () => {
  const colors = ['#ee4b38', '#31a676', '#77cdd7', '#f1bc3e'];
  const [projectImages, setProjectImages] = useState({});
  const [illustrationImages, setIllustrationImages] = useState({});

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
      const projectImageMap = await loadImages(projects);
      const illustrationImageMap = await loadImages(illustration);
      setProjectImages(projectImageMap);
      setIllustrationImages(illustrationImageMap);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <div className="bounce-in">
        <Play />
        <Break />
      </div>

      <div className="content">
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

      <div className="content">
        {illustration.map((item, index) => (
          <CustomContainer
            key={item.id}
            imgSrc={illustrationImages[item.id]}
            projectId={item.id}
            text={item.text}
            href={item.path}
            overlayColor={getColor(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;