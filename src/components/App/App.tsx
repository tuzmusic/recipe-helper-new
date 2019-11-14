import React from "react";
import { fudgyBrowniesResponse } from "../../api-data/spoonacular-api/fudgy-brownies";
import createStore from '../../redux/bundles'
import { Provider } from 'redux-bundler-react'
import InnerAppContainer from "./InnerAppContainer";
import Recipe from "../../models/Recipe";
import { AppState } from "../../redux/bundles/currentRecipe";

// const mock = new MockAdapter(axios);
// mock.onGet(recipeRequest().url).reply(200, fudgyBrowniesResponse);

// const initialState = {}
const startingRecipe = Recipe.fromSpoonacularApi(fudgyBrowniesResponse);
const initialState: AppState = { currentRecipe: { recipe: startingRecipe, currentStepIndex: 0 } };

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
