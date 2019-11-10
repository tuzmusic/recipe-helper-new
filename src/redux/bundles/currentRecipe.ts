import Recipe from "../../models/Recipe";
import axios from "axios";
import { recipeRequest } from "../../utils/requests";
import { createSelector } from "reselect";
import Instruction from "../../models/Instruction";

//region Types
export interface AppState {
  currentRecipe: CurrentRecipeState,
}

interface CurrentRecipeAction {
  type: ActionType,
}

enum ActionType {
  SET_RECIPE,
  CONVERT_RECIPE_STARTED,
  CONVERT_RECIPE_FAILED
}

interface SetRecipeAction extends CurrentRecipeAction {
  type: ActionType.SET_RECIPE;
  recipe: Recipe
}

interface ConvertStarted extends CurrentRecipeAction {
  type: ActionType.CONVERT_RECIPE_STARTED
}

interface ConvertFailed extends CurrentRecipeAction {
  type: ActionType.CONVERT_RECIPE_FAILED,
  error: Error
}

type Action = SetRecipeAction | ConvertStarted | ConvertFailed

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
      case ActionType.SET_RECIPE:
        return { ...state, recipe: action.recipe };
      case ActionType.CONVERT_RECIPE_FAILED:
        return { ...state, error: action.error };
      default:
        return state
    }
  }
};

//region SELECTORS
// todo: this doesn't actually type the selector correctly. (typeof bundle.selectCurrentStep = any, should =
//  Instruction)
type BundleSelector<T> = (state: AppState) => T | undefined

bundle.selectRecipeState = (state: AppState) => state.currentRecipe;

let selectCurrentRecipe: BundleSelector<Recipe> = createSelector(bundle.selectRecipeState, (recipeState: CurrentRecipeState) =>
  recipeState.recipe
);
bundle.selectCurrentRecipe = selectCurrentRecipe;

let selectCurrentStep: BundleSelector<Instruction> = createSelector(
  bundle.selectRecipeState,
  bundle.selectCurrentRecipe,
  (recipeState: CurrentRecipeState, recipe: Recipe) =>
    recipe.instructions[recipeState.currentStepIndex]
);
bundle.selectCurrentStep = selectCurrentStep;

//endregion

//region ACTIONS
bundle.doSetRecipe = (recipe: Recipe) => ({ type: ActionType.SET_RECIPE, recipe });

bundle.doConvertRecipe = (recipeUrl: string) => async ({ dispatch }: { dispatch: any }) => {
  try {
    // NOTE: axios is mocking this. still haven't gotten the actual request to work with axios. ARGGGH!
    const res = await axios(recipeRequest(recipeUrl));
    const recipe = Recipe.fromSpoonacularApi(res.data);
    dispatch({ type: ActionType.SET_RECIPE, recipe })
  } catch (error) {
    dispatch({ type: ActionType.CONVERT_RECIPE_FAILED, error })
  }
};
//endregion

export default bundle
