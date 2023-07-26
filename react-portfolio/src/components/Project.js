import React from 'react';

const Project = ({ title, image1Src, image1Alt, link1, image2Src, image2Alt, link2 }) => {
  return (
    <div className="project">
      <a href={link1}>
        <img src={image1Src} alt={image1Alt} />
      </a>
      <h3>{title}</h3>
    </div>
  );
};

export default Project;

