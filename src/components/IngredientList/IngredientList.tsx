import React from "react";
import Recipe from "../../models/Recipe";

const IngredientList: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <div className={ 'ingredients-list' }>
      <h2>Ingredients</h2>
      < ul>
        { recipe.ingredients.map((ing, i) => <li key={ i }>{ ing.stringDescription }</li>) }
      </ul>
    </div>
  )
};

export default IngredientList;
