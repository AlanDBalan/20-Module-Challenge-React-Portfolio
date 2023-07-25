import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <h3>
        <span>Code Refactoring</span>
        <span>Project 2</span>
      </h3>
      <div className="project">
        <a href="https://alandbalan.github.io/01-HTML-CSS-and-Git-Code-Refactor/">
          <img src="./assets/images/Horiseon image.jpg" alt="First Project-Code Refactoring" />
        </a>
        <a href="">
          <img src="./assets/images/alan background.remini-enhanced.jpg" alt="Placeholder" />
        </a>
      </div>
      <h3>
        <span>Project 3</span>
        <span>Project 4</span>
      </h3>
      <div className="project2">
        <a href="">
          <img src="./assets/images/alan background.remini-enhanced.jpg" alt="Placeholder" />
        </a>
        <a href="">
          <img src="./assets/images/alan background.remini-enhanced.jpg" alt="Placeholder" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;