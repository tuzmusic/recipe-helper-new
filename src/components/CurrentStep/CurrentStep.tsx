import React from "react";
import Instruction from "../../models/Instruction";

interface Props {
  step: Instruction,
  stepNumber: number
}

const CurrentStep = ({ step, stepNumber }: Props) => (
  <div className={ 'step' }>
    <div className={ 'step-text' }>
      { stepNumber }. { step.text }
    </div>
  </div>
);

export default CurrentStep;
