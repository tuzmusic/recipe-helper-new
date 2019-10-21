import React from "react";
import "./ImportRecipeForm.css";

const ImportRecipeForm: React.FC = () => {
  return (
    <div className="ImportRecipeForm">
      <label htmlFor="recipe-url">Enter a url of a recipe:</label>
      <br />
      <input type="text" id="recipe-url" />
      <br />
      <button>Submit</button>
    </div>
  );
};

export default ImportRecipeForm;
