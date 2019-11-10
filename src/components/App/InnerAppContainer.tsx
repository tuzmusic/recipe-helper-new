import React from "react";
import { connect } from 'redux-bundler-react'
import ImportRecipeFormContainer from "../ImportRecipeForm/ImportRecipeFormContainer";
import CookingSessionContainer from "../CookingSession/CookingSessionContainer";

const InnerAppContainer: React.FC<any> = ({ currentRecipe }) => {
  return (currentRecipe
    ? <CookingSessionContainer/>
    : <ImportRecipeFormContainer/>)
};

export default connect('selectCurrentRecipe', InnerAppContainer);

