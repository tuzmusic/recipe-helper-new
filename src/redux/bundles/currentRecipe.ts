import Recipe from "../../models/Recipe";
import axios from "axios";
import { recipeRequest } from "../../utils/requests";
import { createSelector } from "redux-bundler";
import Instruction from "../../models/Instruction";

//region Types
export interface AppState {
  currentRecipe: CurrentRecipeState,
}

interface CurrentRecipeAction {
  type: ActionType,
}

enum ActionType {
  INCREMENT_STEP,
  DECREMENT_STEP,
  SET_RECIPE,
  CONVERT_RECIPE_STARTED,
  CONVERT_RECIPE_FAILED
}

interface SetRecipeAction extends CurrentRecipeAction {
  type: ActionType.SET_RECIPE;
  recipe: Recipe
}

interface ChangeStepAction extends CurrentRecipeAction {
  type: ActionType.INCREMENT_STEP | ActionType.DECREMENT_STEP;
}

interface ConvertStarted extends CurrentRecipeAction {
  type: ActionType.CONVERT_RECIPE_STARTED
}

interface ConvertFailed extends CurrentRecipeAction {
  type: ActionType.CONVERT_RECIPE_FAILED,
  error: Error
}

type Action = SetRecipeAction | ChangeStepAction | ConvertStarted | ConvertFailed

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
      case ActionType.INCREMENT_STEP:
        return {
          ...state,
          // todo: enable optional chaining
          // currentStepIndex: Math.min(state.recipe?.instructions.length ?? 0, state.currentStepIndex + 1)
          currentStepIndex: state.currentStepIndex + 1
        };
      case ActionType.DECREMENT_STEP:
        return {
          ...state,
          // todo: handle this from the action (only dispatch if > 0)
          currentStepIndex: Math.max(0, state.currentStepIndex - 1)
        };
      case ActionType.SET_RECIPE:
        return { ...state, recipe: action.recipe };
      case ActionType.CONVERT_RECIPE_FAILED:
        return { ...state, error: action.error };
      default:
        return state
    }
  },
  
  selectRecipeState: (state: AppState) => state.currentRecipe,
  
  selectCurrentRecipe: createSelector('selectRecipeState', (recipeState: CurrentRecipeState) =>
    recipeState.recipe
  ),
  
  selectCurrentStep: createSelector(
    'selectRecipeState',
    'selectCurrentRecipe',
    (recipeState: CurrentRecipeState, recipe: Recipe) =>
      recipe.instructions[recipeState.currentStepIndex]
  ),
  
  selectCurrentStepNumber: createSelector(
    'selectCurrentRecipe',
    'selectCurrentStep',
    (recipe: Recipe, step: Instruction) =>
      recipe.instructions.indexOf(step) + 1
  )
};

//region ACTIONS
bundle.doSetRecipe = (recipe: Recipe): SetRecipeAction => ({ type: ActionType.SET_RECIPE, recipe });

bundle.doConvertRecipe = (recipeUrl: string) => async ({ dispatch }: { dispatch: any }) => {
  try {
    const res = await axios(recipeRequest(recipeUrl));
    const recipe = Recipe.fromSpoonacularApi(res.data);
    dispatch({ type: ActionType.SET_RECIPE, recipe })
  } catch (error) {
    dispatch({ type: ActionType.CONVERT_RECIPE_FAILED, error })
  }
};

bundle.doIncrementStep = () => {
  return ({ dispatch, getState }: any) => {
    // todo: can I do this with selectors if I define this outside the bundle?
    const recipeState = getState().currentRecipe;
    const recipe = recipeState.recipe;
    dispatch({ type: ActionType.INCREMENT_STEP })
  }
};

bundle.doDecrementStep = () => {
  return ({ type: ActionType.DECREMENT_STEP })
};
//endregion

export default bundle
