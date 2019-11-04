import React, { useState } from "react";
import "./ImportRecipeForm.css";

interface ImportFormProps {
    onSubmit: (url: string) => void;
}

const mockUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract';

const ImportRecipeForm: React.SFC<ImportFormProps> = ({onSubmit}) => {
    const [url, setUrl] = useState(mockUrl);

    return (
        <div className="ImportRecipeForm">
            <label htmlFor="recipe-url">Enter a url of a recipe:</label>
            <br/>
            <input id="recipe-url"
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
