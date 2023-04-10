
import React from 'react';

const Project = ({ project }) => {
  const { mainhead, subhead, description, images } = project;

  return (
    <div className="project">
      <h1 className="mainhead">{mainhead}</h1>
      <h2 className="subhead">{subhead}</h2>
      <p className="description">{description}</p>
      <div className="project-images">
        {images.map((image, index) => (
          <div className="image-container" key={index}>
            <img src={image} alt={`${mainhead} ${index}`} width="100%" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;