import React from "react";
import Ingredient from "../../models/Ingredient";
import './IngredientView.css'

type Props = {
  ingredient: Ingredient,
  toggleChecked: Function
}

const IngredientView: React.FC<Props> = ({ ingredient, toggleChecked }) => (
  <div
    onClick={ () => toggleChecked(ingredient) }
    className={ `ingredient-view ${ ingredient.completed ? 'checked' : 'unchecked' }` }
  >
    <input
      type='checkbox'
      checked={ ingredient.completed }
      readOnly
    />
    <li>{ ingredient.stringDescription }</li>
  </div>
);

export default IngredientView;
