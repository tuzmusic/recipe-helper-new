import React from "react";
import { connect } from 'redux-bundler-react'
import StepView from "./StepView";
import Instruction from "../../models/Instruction";

interface Props {
  step: Instruction,
  doToggleIngredient: Function
}

const StepViewContainer = ({ step, doToggleIngredient }: Props) => (
  <StepView
    step={ step }
    toggleIngredientChecked={ doToggleIngredient }
  />
);

export default connect(
  'doToggleIngredient',
  StepViewContainer
);
