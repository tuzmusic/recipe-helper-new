import React from "react";
import createStore from '../../redux/bundles'
import { Provider } from 'redux-bundler-react'
import InnerAppContainer from "./InnerAppContainer";
import Recipe from "../../models/Recipe";
import { AppState } from "../../redux/bundles/currentRecipe";
import { shrimpCurryResponse } from "../../api-data/spoonacular-api/malaysianShrimpCurry";

export const DEV_MODE = false;

const startingRecipe = Recipe.fromSpoonacularApi(shrimpCurryResponse);
let initialState: AppState = { currentRecipe: { currentStepIndex: 0 } };
if (DEV_MODE) {
  // new MockAdapter(axios).onGet(recipeRequest().url).reply(200, fudgyBrowniesResponse);
  initialState.currentRecipe.recipe = startingRecipe
}

const App: React.FC = () => {
  return (
    <Provider store={ createStore(initialState) }>
      <div className="App">
        <InnerAppContainer/>
      </div>
    </Provider>
  );
};

export default App;
