import React from "react";
import { connect } from 'redux-bundler-react'
import CurrentStep from "./CurrentStep";
import Instruction from "../../models/Instruction";

interface Props {
  currentStep: Instruction,
  currentStepNumber: number
}

const CurrentStepContainer = ({ currentStep, currentStepNumber }: Props) => (
  <CurrentStep step={ currentStep }
               stepNumber={ currentStepNumber }
  />
);

export default connect(
  'selectCurrentStep',
  'selectCurrentStepNumber',
  CurrentStepContainer
);
