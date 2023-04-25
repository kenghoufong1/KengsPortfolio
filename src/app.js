import "bootstrap/dist/css/bootstrap.min.css";
import './app.css';
import React from "react";
import Headers from './components/Header';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import MyNavbar from './components/Navbar';
import Github from './components/github';

function App() {
  const projects = [
    {
      imageSrc: "./freshg.webp",
      title: "Savr App",
      text: "An app that let's you find all local grocery deals available",
    },
    {
      imageSrc: "./stone background.jpg",
      title: "Wellness Tracker",
      text: "More example text to build on the card.",
    },
    {
      imageSrc: "./employee.png",
      title: "Employee Manager",
      text: "More example text to build on the card.",
    },
    {
      imageSrc: "./note taker.jpg",
      title: "Note Taker",
      text: "More example text to build on the card.",
    }
  ];

  return (
    <div className="background">
      <MyNavbar />
      <Headers />
      <div className="projects">
        {projects.map(project => (
          <Project
            imageSrc={project.imageSrc}
            title={project.title}
            text={project.text}
            />
        ))}
      </div>
      <Skill />
      <Contact/>
      <Github/>
    </div>
  );
}

export default App;
