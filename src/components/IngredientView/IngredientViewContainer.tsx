import React from "react";
import { connect } from 'redux-bundler-react'
import Ingredient from "../../models/Ingredient";
import IngredientView from "./IngredientView";

type Props = {
  ingredient: Ingredient,
  doToggleIngredient: Function
}

const IngredientViewContainer: React.FC<Props> = ({ ingredient, doToggleIngredient }) => (
  <IngredientView
    ingredient={ ingredient }
    toggleChecked={ doToggleIngredient.bind(null, ingredient) }
  />
);

export default connect('doToggleIngredient', IngredientViewContainer);
