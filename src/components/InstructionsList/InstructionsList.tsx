import React from "react";
import Recipe from "../../models/Recipe";

type Props = { recipe: Recipe, hideTitle?: boolean };

const InstructionsList: React.FC<Props> = ({ recipe, hideTitle = false }) => {
  return (
    <div className={ 'instructions-list' }>
      { !hideTitle && <h2>Instructions</h2> }
      <ol>
        { recipe.instructions.map((inst, i) =>
          <li key={ i }>{ inst.text }</li>)
        }
      </ol>
    </div>
  )
};

export default InstructionsList;
