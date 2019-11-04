import React from "react";
import ImportRecipeFormContainer from "../ImportRecipeForm/ImportRecipeFormContainer";
import MockAdapter from "axios-mock-adapter";
import axios from 'axios'
import { recipeRequest } from "../../utils/requests";
import { fudgyBrowniesResponse } from "../../api-data/spoonacular-api/fudgy-brownies";
import createStore from '../../redux/bundles'
import { Provider } from 'redux-bundler-react'

const mock = new MockAdapter(axios);
mock.onGet(recipeRequest().url).reply(200, fudgyBrowniesResponse);

const App: React.FC = () => {
  return (
    <Provider store={ createStore({}) }>
      <div className="App">
        <ImportRecipeFormContainer/>
      </div>
    </Provider>
  );
};

export default App;
