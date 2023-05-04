import "bootstrap/dist/css/bootstrap.min.css";
import './app.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Headers from './components/Header';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import MyNavbar from './components/Navbar';
import Github from './components/github';
import employee from "./assets/employee.png"
import freshg from "./assets/freshg.webp"
import notetaker from "./assets/note taker.jpg"
import stone from "./assets/stone background.jpg"

gsap.registerPlugin(ScrollTrigger);



function App() {
  const projects = [
    {
      imageSrc: freshg,
      title: "Savr App",
      text: "An app that let's you find all local grocery deals available",
      link:"https://savr-app.herokuapp.com/"
    },
    {
      imageSrc: stone,
      title: "Wellness Tracker",
      text: "Keep track of all your daily exercise in just the click of a few button",
      link:"https://wellness-tracker206.herokuapp.com/"
    },
    {
      imageSrc: employee,
      title: "The Tech Blog",
      text: "A place where all techer can share their thoughts!",
      link:"https://the-tech-blog206.herokuapp.com/"
    },
    {
      imageSrc: notetaker,
      title: "Note Taker",
      text: "A place where you can keep track of all your daily rountines",
      link:"https://note-taker-205.herokuapp.com/"
    }
  ];

  return (
    <div className="background">
      <MyNavbar />
      <Headers />
      <div className="projects" id="projectid">
        {projects.map(project => (
          <Project
            imageSrc={project.imageSrc}
            title={project.title}
            text={project.text}
            link={project.link}
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
