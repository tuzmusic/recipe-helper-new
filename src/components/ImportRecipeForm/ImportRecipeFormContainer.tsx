import React from "react";
import ImportRecipeForm from "./ImportRecipeForm";
import axios from 'axios'
import { recipeRequest } from "../../utils/requests";

const ImportRecipeFormContainer: React.FC = () => {
    async function onSubmitUrl(recipeUrl: string) {
        try {
            // NOTE: axios is mocking this. still haven't gotten the actual request to work with axios. ARGGGH!
            const res = await axios(recipeRequest(recipeUrl));
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="ImportRecipeFormContainer">
            <ImportRecipeForm onSubmit={ onSubmitUrl }/>
        </div>
    );
};

export default ImportRecipeFormContainer;
