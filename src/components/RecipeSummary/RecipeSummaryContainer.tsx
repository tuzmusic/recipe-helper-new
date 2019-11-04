import React from "react";
import RecipeSummary from "./RecipeSummary";
import { connect } from 'redux-bundler-react'
import Recipe from "../../models/Recipe";

const RecipeSummaryContainer: React.FC<{ currentRecipe: Recipe }> = ({ currentRecipe }) => {
  return (currentRecipe ? <RecipeSummary recipe={ currentRecipe }/> : null)
};

export default connect('selectCurrentRecipe', RecipeSummaryContainer);
