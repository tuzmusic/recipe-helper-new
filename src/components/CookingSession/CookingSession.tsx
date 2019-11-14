import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Recipe from "../../models/Recipe";
import Instruction from "../../models/Instruction";
import CurrentStep from "../CurrentStep/CurrentStep";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

type Props = {
  recipe: Recipe,
  step: Instruction,
  nextHandler: () => any,
  prevHandler: () => any
}

const CookingSession: React.FC<Props> = ({ recipe, step, nextHandler, prevHandler }) => {
  return <Container>
    <Row>
      <Col><Button onClick={ prevHandler }>Prev</Button></Col>
      <Col><Button onClick={ nextHandler }>Next</Button></Col>
    </Row>
    <Row>
      <CurrentStep step={ step }/>
    </Row>
  </Container>
};

export default CookingSession;
