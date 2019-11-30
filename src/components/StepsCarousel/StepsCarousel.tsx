import React from "react";
import Instruction from "../../models/Instruction";
import Carousel from "react-bootstrap/Carousel"
import "./StepsCarousel.css"
import StepViewContainer from "../StepView/StepViewContainer";
import styled from "@emotion/styled";

type Props = {
  recipeSteps: Instruction[],
  currentStepIndex: number,
  doSetIndex: (index: number) => void
}

const CarouselContainer = styled(Carousel)`
    display: flex;
    border: blue solid;
    background-color: lightgray;
    height: 70vh;
    width: 500px;
    justify-content: center;
    margin: 0px;
    padding: 0px 40px
`;

const Item = styled(Carousel.Item)`
    height: 100%;
    margin: 0px;
    padding: 0px 10px
`;

const CarouselWrapper: React.FC<any> = ({ children, ...props }) =>
  <CarouselContainer indicators={ false } wrap={ false } interval={ 0 } { ...props }>
    { children }
  </CarouselContainer>;

const StepsCarousel: React.FC<Props> = ({ recipeSteps, currentStepIndex, doSetIndex }) => (
  <CarouselWrapper activeIndex={ currentStepIndex } onSelect={ doSetIndex }>
    { recipeSteps.map((step, i) => <Item key={ i }>
        <StepViewContainer step={ step }/>
      </Item>
    ) }
  </CarouselWrapper>
);

export default StepsCarousel;
