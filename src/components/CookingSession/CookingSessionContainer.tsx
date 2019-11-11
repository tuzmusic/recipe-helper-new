import React from "react";
import Recipe from "../../models/Recipe";
import { connect } from 'redux-bundler-react'
import Instruction from "../../models/Instruction";
import CookingSession from "./CookingSession";

type Props = {
  currentRecipe: Recipe,
  currentStep: Instruction,
  doIncrementStep: () => any
  doDecrementStep: () => any
}

const CookingSessionContainer: React.FC<Props> = ({
  currentRecipe,
  currentStep,
  doIncrementStep,
  doDecrementStep
}) => {
  return <CookingSession recipe={ currentRecipe }
                         step={ currentStep }
                         nextHandler={ doIncrementStep }
                         prevHandler={ doDecrementStep }
  />;
};

export default connect(
  'selectCurrentStep',
  'selectCurrentRecipe',
  'doIncrementStep',
  'doDecrementStep',
  CookingSessionContainer
);
