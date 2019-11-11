import mockRecipe from "./Recipe.mock";
import currentRecipe, { AppState } from "./currentRecipe";
import React from 'react'
import Instruction from "../../models/Instruction";

const mockState: AppState = {
  currentRecipe: {
    recipe: mockRecipe,
    currentStepIndex: 0
  }
};
const bundle = currentRecipe;

describe('currentRecipe selectors', () => {
  describe('selectRecipeState', () => {
    it('returns the currentRecipeState', () => {
      expect(bundle.selectRecipeState(mockState)).toEqual(mockState.currentRecipe);
    });
  });
  describe('selectCurrentRecipe', () => {
    it('returns the current recipe', () => {
      expect(bundle.selectCurrentRecipe(mockState)).toEqual(mockRecipe);
    });
  });
  describe('selectCurrentStep', () => {
    it('returns the current step', () => {
      let step: Instruction = bundle.selectCurrentStep(mockState);
      expect(step.text).toEqual('First step');
    });
  });
});
