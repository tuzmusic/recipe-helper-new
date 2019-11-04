import React from "react";
import "./ImportRecipeForm.css";

interface ImportFormProps {
  onSubmit: (event: React.FormEvent<HTMLButtonElement>) => void;
}

const ImportRecipeForm: React.SFC<ImportFormProps> = ({ onSubmit }) => {
  return (
    <div className="ImportRecipeForm">
      <label htmlFor="recipe-url">Enter a url of a recipe:</label>
      <br />
      <input type="text" id="recipe-url" />
      <br />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default ImportRecipeForm;
