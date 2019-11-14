import React from "react";
import Instruction from "../../models/Instruction";

interface Props {step: Instruction}

const CurrentStep: React.FC<Props> = ({ step }) => (
  <div className={ 'step' }>
    <div className={ 'step-text' }>
      { step.number }. { step.text }
    </div>
  </div>
);

export default CurrentStep;
