import mockRecipe from "./Recipe.mock";
import currentRecipe, { CurrentRecipeState } from "./currentRecipe";
import React from 'react'
import { composeBundles } from 'redux-bundler'

const mockRecipeState: CurrentRecipeState = {
  recipe: mockRecipe,
  currentStepIndex: 0
};

const getStore = composeBundles(currentRecipe);
let store = getStore();
const state = () => store.getState().currentRecipe;

describe('doIncrementStep', () => {
  beforeEach(() => {
    store = getStore()
  });

  it('increments the current step when possible', () => {
    expect(state().currentStepIndex).toEqual(0);
    store.action('doIncrementStep');
    expect(state().currentStepIndex).toEqual(1);
  });
  
  xit('does not increment the step if we are at the final step', () => {
  });
});
