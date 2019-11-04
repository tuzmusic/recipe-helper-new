import React from "react";
import { connect } from 'redux-bundler-react'
import RecipeSummary from "../RecipeSummary/RecipeSummary";
import ImportRecipeFormContainer from "../ImportRecipeForm/ImportRecipeFormContainer";

const InnerAppContainer: React.FC<any> = ({ currentRecipe }) => {
  return (currentRecipe
    ? <RecipeSummary recipe={ currentRecipe }/>
    : <ImportRecipeFormContainer/>)
};

export default connect('selectCurrentRecipe', InnerAppContainer);

