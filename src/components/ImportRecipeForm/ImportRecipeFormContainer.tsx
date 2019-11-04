import React from "react";
import ImportRecipeForm from "./ImportRecipeForm";
import { connect } from 'redux-bundler-react'

const ImportRecipeFormContainer: React.FC<any> = ({ doConvertRecipe }) => {
  
  return (
    <div className="ImportRecipeFormContainer">
      <ImportRecipeForm onSubmit={ doConvertRecipe }/>
    </div>
  );
};

export default connect('doConvertRecipe', ImportRecipeFormContainer);
