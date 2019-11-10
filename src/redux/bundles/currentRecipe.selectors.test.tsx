import mockRecipe from "./Recipe.mock";
import currentRecipe, { AppState } from "./currentRecipe";
import React from 'react'
import Instruction from "../../models/Instruction";

const mockRecipeState: AppState = {
  currentRecipe: {
    recipe: mockRecipe,
    currentStepIndex: 0
  }
};
/*

const store = createStore({ currentRecipe: mockRecipeState });

const appWrapper = render(
  <Provider store={ store }>
    <div className="App">
      <InnerAppContainer/>
    </div>
  </Provider>
);

describe('currentRecipe selectors', () => {
  describe('selectCurrentRecipe', () => {
    it('gets the mockRecipe', () => {
      expect(mockRecipe.title).toEqual('Mock Recipe');
    });
  });
});
*/

const bundle = currentRecipe;

describe('currentRecipe selectors', () => {
  describe('selectRecipeState', () => {
    it('returns the currentRecipeState', () => {
      expect(bundle.selectRecipeState(mockRecipeState)).toEqual(mockRecipeState.currentRecipe);
    });
  });
  describe('selectCurrentRecipe', () => {
    it('returns the current recipe', () => {
      expect(bundle.selectCurrentRecipe(mockRecipeState)).toEqual(mockRecipe);
    });
  });
  describe('selectCurrentStep', () => {
    it('returns the current step', () => {
      let step: Instruction = bundle.selectCurrentStep(mockRecipeState);
      expect(step.text).toEqual('First step');
    });
  });
});
