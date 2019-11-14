import React, { useState } from "react";
import "./ImportRecipeForm.css";
import { DEV_MODE } from "../App/App";

interface ImportFormProps {
  onSubmit: (url: string) => void;
}

export const mockUrl = 'https://www.melskitchencafe.com/the-best-fudgy-brownies/';

const ImportRecipeForm: React.FC<ImportFormProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState(DEV_MODE ? mockUrl : '');
  
  return (
    <div className="import-recipe-form">
      <label htmlFor="recipe-url">Enter a url of a recipe:</label>
      <br/>
      <input id="recipe-url-input"
             value={ url }
             type="text"
             onChange={ e => setUrl(e.target.value) }
      />
      <br/>
      <button onClick={ () => onSubmit(url) }>Submit</button>
    </div>
  );
};

export default ImportRecipeForm;
