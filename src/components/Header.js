import '../header.css';
import React from 'react';
import Project from './Project';



function Header() {
    return (
        <div className="Header">
            <div className="circle"></div>
            <br></br>
            <h2 id="aboutme">About Me</h2>
            <p>Keng is a full Stack web developer . Earned a certificate in Full Stack Web Development from the University Of Washington Coding Boot Camp. Innovative problem-solver who is passionate about developing apps . Strengths in creativity, teamwork, and building projects from ideation to execution. </p>
            <button className="cta">Contact Me</button>
        </div>
    );

};




export default Header;