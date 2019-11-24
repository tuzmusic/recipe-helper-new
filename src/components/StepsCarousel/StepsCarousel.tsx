import React from "react";
import Instruction from "../../models/Instruction";
import Carousel from "react-bootstrap/Carousel"
import "./StepsCarousel.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StepViewContainer from "../StepView/StepViewContainer";

type Props = {
  recipeSteps: Instruction[],
  currentStepIndex: number,
  doSetIndex: (index: number) => void
}

const StepsCarousel: React.FC<Props> = ({ recipeSteps, currentStepIndex, doSetIndex }) => (
  <Container>
    <Row>
      <Carousel
        className={ 'carousel-container' }
        indicators={ false }
        activeIndex={ currentStepIndex }
        // activeIndex={ 1 }
        onSelect={ doSetIndex }
        wrap={ false }
        interval={ 0 }
      >
        { recipeSteps.map((step, i) =>
          <Carousel.Item
            key={ i }
            className={ 'carousel-step' }>
            <StepViewContainer step={ step }/>
          </Carousel.Item>
        ) }
      </Carousel>
    </Row>
  </Container>
);

export default StepsCarousel;
