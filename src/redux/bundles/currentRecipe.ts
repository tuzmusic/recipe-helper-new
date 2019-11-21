import Recipe from "../../models/Recipe";
import axios from "axios";
import { recipeRequest } from "../../utils/requests";
import { createSelector } from "reselect";
import Instruction from "../../models/Instruction";

//region Types
export interface AppState {
  currentRecipe: CurrentRecipeState,
}

export interface CurrentRecipeAction {
  type: ActionType,
}

enum ActionType {
  INCREMENT_STEP,
  DECREMENT_STEP,
  SET_RECIPE,
  SET_STEP_INDEX,
  CONVERT_RECIPE_STARTED,
  CONVERT_RECIPE_FAILED
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
  type: ActionType.INCREMENT_STEP | ActionType.DECREMENT_STEP;
}

export interface ConvertStarted extends CurrentRecipeAction {
  type: ActionType.CONVERT_RECIPE_STARTED
}

export interface ConvertFailed extends CurrentRecipeAction {
  type: ActionType.CONVERT_RECIPE_FAILED,
  error: Error
}

type Action = SetStepAction | SetRecipeAction | ChangeStepAction | ConvertStarted | ConvertFailed

//endregion

export interface CurrentRecipeState {
  recipe?: Recipe,
  error?: Error,
  currentStepIndex: number
}

const initialState: CurrentRecipeState = {
  currentStepIndex: 0
};

const bundle: any = {
  name: 'currentRecipe',
  
  reducer: (state: CurrentRecipeState = initialState, action: Action) => {
    switch (action.type) {
      case ActionType.SET_STEP_INDEX:
        return { ...state, currentStepIndex: action.index };
      case ActionType.SET_RECIPE:
        return { ...state, recipe: action.recipe };
      case ActionType.CONVERT_RECIPE_FAILED:
        return { ...state, error: action.error };
      default:
        return state
    }
  },
  
};
//region SELECTORS
// todo: this doesn't actually type the selector correctly. (typeof bundle.selectCurrentStep = any, should =
//  Instruction)
type BundleSelector<T> = (state: AppState) => T | undefined

bundle.selectRecipeState = (state: AppState) => state.currentRecipe;

// BundleSelector<Recipe>
bundle.selectCurrentRecipe = createSelector(bundle.selectRecipeState, (recipeState: CurrentRecipeState) =>
  recipeState.recipe
);

bundle.selectCurrentStepIndex = createSelector(bundle.selectRecipeState, (recipeState: CurrentRecipeState) =>
  recipeState.currentStepIndex
);

// BundleSelector<Instruction[]>
bundle.selectRecipeSteps = createSelector(bundle.selectCurrentRecipe, (recipe: Recipe) => recipe.instructions);

// BundleSelector<Instruction>
bundle.selectCurrentStep = createSelector(
  bundle.selectRecipeState,
  bundle.selectCurrentRecipe,
  (recipeState: CurrentRecipeState, recipe: Recipe) =>
    recipe.instructions[recipeState.currentStepIndex]
);

bundle.selectCurrentStepNumber = createSelector(
  bundle.selectCurrentRecipe,
  bundle.selectCurrentStep, (
    recipe: Recipe, step: Instruction) => recipe.instructions.indexOf(step) + 1);

//endregion

//region ACTIONS
bundle.doSetRecipe = (recipe: Recipe): SetRecipeAction => ({ type: ActionType.SET_RECIPE, recipe });

bundle.doSetIndex = (index: number): SetStepAction => ({ type: ActionType.SET_STEP_INDEX, index });

bundle.doConvertRecipe = (recipeUrl: string) => async ({ dispatch }: { dispatch: any }) => {
  try {
    const res = await axios(recipeRequest(recipeUrl));
    const recipe = Recipe.fromSpoonacularApi(res.data);
    dispatch({ type: ActionType.SET_RECIPE, recipe })
  } catch (error) {
    dispatch({ type: ActionType.CONVERT_RECIPE_FAILED, error })
  }
};

//endregion

export default bundle
