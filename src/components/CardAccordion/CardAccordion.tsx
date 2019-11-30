import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";

const Header = styled(Card.Header)({
  padding: '0px'
});

const Body = styled(Card.Body)({
  padding: '0px',
  margin: '0px',
});

export const CardAccordion: React.FC<{ children: React.ReactNode, title: string, startClosed?: Boolean }> = ({ children, title, startClosed }) => {
  if (!startClosed) { startClosed = false }
  return <Accordion defaultActiveKey={ startClosed ? '' : title }>
    <Header>
      <Accordion.Toggle as={ Button } variant="link" eventKey={ title }>
        { title }
      </Accordion.Toggle>
    </Header>
    <Accordion.Collapse eventKey={ title }>
      <Body>
        { children }
      </Body>
    </Accordion.Collapse>
  </Accordion>;
};
