import '../header.css';
import React from 'react';
import { gsap } from "gsap";
import { useRef,useEffect } from "react";

function Header() {
    const imgref =useRef(null);

    useEffect(()=>{
        const el = imgref.current;
        gsap.fromTo(el, { y: -100 }, { y: 0, duration: 2 ,scrolltrigger:{
            trigger:el,
        }});
    },[]);

    return (
        <div className="Header" id='aboutme' ref={imgref}>
            <div className="circle" ></div>
            <br></br>
            <h1>About Me</h1>
            <p>Keng is a full Stack web developer . Earned a certificate in Full Stack Web Development from the University Of Washington Coding Boot Camp. Innovative problem-solver who is passionate about developing apps . Strengths in creativity, teamwork, and building projects from ideation to execution. </p>
        </div>
    );

};




export default Header;