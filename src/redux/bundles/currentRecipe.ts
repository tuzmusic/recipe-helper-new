import Recipe from "../../models/Recipe";
import axios from "axios";
import { recipeRequest } from "../../utils/requests";

//region Types
interface AppState {
  currentRecipe: CurrentRecipeState
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

interface CurrentRecipeState {
  recipe?: Recipe,
  error?: Error
}

export default {
  name: 'currentRecipe',
  
  reducer: (state: CurrentRecipeState = {}, action: Action) => {
    switch (action.type) {
      case ActionType.SET_RECIPE:
        console.log('SET_RECIPE');
        return { ...state, recipe: action.recipe };
      case ActionType.CONVERT_RECIPE_FAILED:
        console.log(action.error);
        return { ...state, error: action.error };
      default:
        return state
    }
  },
  
  selectCurrentRecipe: (state: AppState) => state.currentRecipe.recipe,
  
  doSetRecipe: (recipe: Recipe) => ({ type: ActionType.SET_RECIPE, recipe }),
  
  doConvertRecipe: (recipeUrl: string) => async ({ dispatch }: { dispatch: any }) => {
    try {
      // NOTE: axios is mocking this. still haven't gotten the actual request to work with axios. ARGGGH!
      const res = await axios(recipeRequest(recipeUrl));
      const recipe = Recipe.fromSpoonacularApi(res.data);
      dispatch({ type: ActionType.SET_RECIPE, recipe })
    } catch (error) {
      dispatch({ type: ActionType.CONVERT_RECIPE_FAILED, error })
    }
  }
}
