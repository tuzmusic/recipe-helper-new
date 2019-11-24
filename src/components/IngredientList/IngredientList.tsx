import React from "react";
import Recipe from "../../models/Recipe";
import IngredientViewContainer from "../IngredientView/IngredientViewContainer";

type Props = { recipe: Recipe, hideTitle?: boolean }

const IngredientList: React.FC<Props> = ({ recipe, hideTitle = false }) => {
  return (
    <div className={ 'ingredients-list' }>
      { !hideTitle && <h2>Ingredients</h2> }
      <ul>
        { recipe.ingredients.map((ing, i) =>
          <IngredientViewContainer
            key={ i }
            ingredient={ ing }
          />)
        }
      </ul>
    </div>
  )
};

export default IngredientList;
