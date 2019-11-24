//region Types
import Recipe from "../models/Recipe";
import { CurrentRecipeState } from "./bundles/currentRecipe";
import Ingredient from "../models/Ingredient";

export interface AppState {
  currentRecipe: CurrentRecipeState,
}

export interface CurrentRecipeAction {
  type: ActionType,
}

export enum ActionType {
  INCREMENT_STEP = 'INCREMENT_STEP',
  DECREMENT_STEP = 'DECREMENT_STEP',
  SET_RECIPE = 'SET_RECIPE',
  SET_STEP_INDEX = 'SET_STEP_INDEX',
  CONVERT_RECIPE_STARTED = 'CONVERT_RECIPE_STARTED',
  CONVERT_RECIPE_FAILED = 'CONVERT_RECIPE_FAILED',
  TOGGLE_INGREDIENT_DONE = 'TOGGLE_INGREDIENT_DONE'
}

export interface ToggleIngredientAction extends CurrentRecipeAction {
  type: ActionType.TOGGLE_INGREDIENT_DONE;
  ingredient: Ingredient
}

export interface SetRecipeAction extends CurrentRecipeAction {
  type: ActionType.SET_RECIPE;
  recipe: Recipe
}

export interface SetStepAction extends CurrentRecipeAction {
  type: ActionType.SET_STEP_INDEX;
  index: number
}

export interface ChangeStepAction extends CurrentRecipeAction {
  type: ActionType.INCREMENT_STEP
    | ActionType.DECREMENT_STEP;
}

export interface ConvertStarted extends CurrentRecipeAction {
  type: ActionType.CONVERT_RECIPE_STARTED
}

export interface ConvertFailed extends CurrentRecipeAction {
  type: ActionType.CONVERT_RECIPE_FAILED,
  error: Error
}

export type Action = SetStepAction
  | SetRecipeAction
  | ChangeStepAction
  | ConvertStarted
  | ConvertFailed
  | ToggleIngredientAction

//endregion
