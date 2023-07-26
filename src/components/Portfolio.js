import React from 'react';
import Project from './Project';

const Portfolio = () => {
  return (
    <div>
      <figure id="portfolio" className="image-eyes" alt="Alan's eyes"></figure>
      <section id="port">
        <h2>My Portfolio</h2>

        {/* Project 1 */}
        <Project
          title="Code Refactoring"
          image1Src="https://cdn.discordapp.com/attachments/1086145365008461885/1133567685901434911/image.png"
          image1Alt="First Project - Code Refactoring"
          link1="https://alandbalan.github.io/01-HTML-CSS-and-Git-Code-Refactor/"

        />

        {/* Project 2 */}
        <Project
          title="Advanced CSS Challenge: Professional Portfolio"
          image1Src="https://cdn.discordapp.com/attachments/1086145365008461885/1133566365077360670/image.png"
          image1Alt="Placeholder"
          link1="https://alandbalan.github.io/02-Advanced-CSS-Style-Portfolio-Project/"
        />

        {/* Project 2 */}
        <Project
          title="Advanced CSS Challenge: Professional Portfolio"
          image1Src="https://cdn.discordapp.com/attachments/1086145365008461885/1133566365077360670/image.png"
          image1Alt="Placeholder"
          link1="https://alandbalan.github.io/02-Advanced-CSS-Style-Portfolio-Project/"
        />

                {/* Project 2 */}
                <Project
          title="Advanced CSS Challenge: Professional Portfolio"
          image1Src="https://cdn.discordapp.com/attachments/1086145365008461885/1133566365077360670/image.png"
          image1Alt="Placeholder"
          link1="https://alandbalan.github.io/02-Advanced-CSS-Style-Portfolio-Project/"
        />

                {/* Project 2 */}
                <Project
          title="Advanced CSS Challenge: Professional Portfolio"
          image1Src="https://cdn.discordapp.com/attachments/1086145365008461885/1133566365077360670/image.png"
          image1Alt="Placeholder"
          link1="https://alandbalan.github.io/02-Advanced-CSS-Style-Portfolio-Project/"
        />
        
        {/* Project 2 */}
        <Project
          title="Advanced CSS Challenge: Professional Portfolio"
          image1Src="https://cdn.discordapp.com/attachments/1086145365008461885/1133566365077360670/image.png"
          image1Alt="Placeholder"
          link1="https://alandbalan.github.io/02-Advanced-CSS-Style-Portfolio-Project/"
        />
        
      </section>
    </div>
  );
};

export default Portfolio;