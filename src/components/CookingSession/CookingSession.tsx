import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Recipe from "../../models/Recipe";
import Instruction from "../../models/Instruction";

type Props = { recipe: Recipe, step: Instruction }

const CookingSession: React.FC<Props> = ({ recipe, step }) => (
  <Container>
    <Row>
      { step && step.text }
    </Row>
  </Container>
);

export default CookingSession;
