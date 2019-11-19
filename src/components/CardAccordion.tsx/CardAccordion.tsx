import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const CardAccordion: React.FC<{ children: React.ReactNode, title: string, startClosed?: Boolean }> = ({ children, title, startClosed }) => {
  if (!startClosed) { startClosed = false }
  return <Accordion defaultActiveKey={ startClosed ? '' : title }>
    <Card.Header className='card-header'>
      <Accordion.Toggle as={ Button } variant="link" eventKey={ title }>
        { title }
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={ title }>
      <Card.Body className='card-body'>
        { children }
      </Card.Body>
    </Accordion.Collapse>
  </Accordion>;
};
