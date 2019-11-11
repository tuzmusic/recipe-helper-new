import mockRecipe from "./Recipe.mock";
import currentRecipe, { CurrentRecipeState } from "./currentRecipe";
import React from 'react'

const mockRecipeState: CurrentRecipeState = {
  recipe: mockRecipe,
  currentStepIndex: 0
};
const bundle = currentRecipe;
const { reducer, doIncrementStep, doDecrementStep } = bundle;

describe('doIncrementStep', () => {
  it('increments the current step when possible', () => {
    let result = reducer(mockRecipeState, doIncrementStep());
    expect(result.currentStepIndex).toEqual(1)
  });
  it('does not increment the step if we are at the final step', () => {
    const lastIndex = mockRecipe.instructions.length - 1;
    const state: CurrentRecipeState = { ...mockRecipeState, currentStepIndex: lastIndex };
    let result = reducer(state, doIncrementStep());
    expect(result.currentStepIndex).toEqual(lastIndex)
  });
});
