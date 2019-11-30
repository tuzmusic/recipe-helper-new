import React from "react";
import Instruction from "../../models/Instruction";
import IngredientViewContainer from "../IngredientView/IngredientViewContainer";
import styled from "@emotion/styled";

interface Props {
  step: Instruction,
  toggleIngredientChecked: Function
}

const Container = styled.div();
const Ingredients = styled.div();
const Step = styled.div({
  fontWeight: 'bold',
  fontSize: 'larger'
});

const StepView = ({ step }: Props) => (
  <Container>
    <Step>
      { step.number }. { step.text }
    </Step>
    <Ingredients>
      {
        step.ingredients.map(ing => <IngredientViewContainer ingredient={ ing }/>)
      }
    </Ingredients>
  </Container>
);

export default StepView;
