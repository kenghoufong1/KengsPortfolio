import '../skills.css';
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SkillCard = ({ }) => {
  const projectref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = projectref.current;

    gsap.fromTo(
      el,
      { x: -500 },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          // scrub: true // Enable scrubbing effect
        }
      }
    );
  }, []);

  return (
    <div className='skills' id='skill' ref={projectref}>
      <h2>TECHNICAL SKILLS</h2>
      <li>JavaScript ES6+</li>
      <li>CSS3</li>
      <li>HTML5</li>
      <li>SQL</li>
      <li>GitHub</li>
      <li>MySQL</li>
      <li>Express</li>
      <li>React</li>
      <li>Node</li>
      <li>jQuery</li>
      <li>Bootstrap</li>
      <li>Handlebars</li>
      <li>Sequelize</li>
      <li>MongoDB</li>
      <li>GraphQL</li>
      <a href={`${process.env.PUBLIC_URL}/kengsResume.docx`} download="kengsResume.docx">
        <button id="download-btn">
          Download My Resume
        </button>
      </a>
    </div>
  );
};

export default SkillCard;