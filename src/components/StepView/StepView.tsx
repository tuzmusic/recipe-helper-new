import React from "react";
import Instruction from "../../models/Instruction";
import IngredientViewContainer from "../IngredientView/IngredientViewContainer";
import './StepView.css'

interface Props {
  step: Instruction,
  toggleIngredientChecked: Function
}

const StepView = ({ step }: Props) => (
  <div className={ 'step' }>
    <div className={ 'step-text' }>
      { step.number }. { step.text }
    </div>
    <div className={ 'step-ingredients' }>
      {
        step.ingredients.map(ing => {
            return <IngredientViewContainer ingredient={ ing }/>;
          }
        )
      }
    </div>
  </div>
);

export default StepView;
