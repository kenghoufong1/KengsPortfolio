import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SkillCard = ({ skillName, skillDescription }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{skillName}</Card.Title>
        <Card.Text>{skillDescription}</Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
  );
};

export default SkillCard;