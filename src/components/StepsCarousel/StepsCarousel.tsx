import React from "react";
import Instruction from "../../models/Instruction";
import Carousel from "react-bootstrap/Carousel"
import "./StepsCarousel.css"

type Props = {
  recipeSteps: Instruction[],
  currentStepIndex: number,
  doSetIndex: (index: number) => void
}

const StepsCarousel: React.FC<Props> = ({ recipeSteps, currentStepIndex, doSetIndex }) => (
  <Carousel className={ 'carousel-container' }
            indicators={ false }
            activeIndex={ currentStepIndex }
            onSelect={ doSetIndex }
  >
    { recipeSteps.map((step, i) =>
      <Carousel.Item key={ i } className={ 'carousel-step' }>
        { step.text }
      </Carousel.Item>
    ) }
  </Carousel>
);

export default StepsCarousel;
