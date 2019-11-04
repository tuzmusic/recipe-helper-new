import React from "react";
import Recipe from "../../models/Recipe";

const InstructionsList: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <div className={ 'instructions-list' }>
      <h2>Instructions</h2>
      <ol>
        { recipe.instructions.map((ing, i) => <li key={ i }>{ ing.text }</li>) }
      </ol>
    </div>
  )
};

export default InstructionsList;
