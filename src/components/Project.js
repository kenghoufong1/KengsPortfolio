import React from 'react';
import '../project.css';
import { Card } from 'react-bootstrap';


function Project({ imageSrc, title, text }) {
    return (
      <Card className="custom-card" id="myprojects" >
        <Card.Img variant="top" src={imageSrc} className='pictures' />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }



export default Project;