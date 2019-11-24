import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Recipe from "../../models/Recipe";
import Instruction from "../../models/Instruction";
import StepsCarouselContainer from "../StepsCarousel/StepsCarouselContainer";

type Props = {
  recipe: Recipe,
  step: Instruction,
  nextHandler: () => any,
  prevHandler: () => any
}

const CookingSession: React.FC<Props> = ({ recipe, step, nextHandler, prevHandler }) =>
  <Container>
    <Row>
      <StepsCarouselContainer/>
    </Row>
  </Container>;

export default CookingSession;
