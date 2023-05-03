import React from 'react';
import '../project.css';
import { Card } from 'react-bootstrap';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

function Project({ imageSrc, title, text, link }) {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <Card className="custom-card" id="myprojects" onClick={handleClick}>
      <Card.Img variant="top" src={imageSrc} className='pictures' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Project;
