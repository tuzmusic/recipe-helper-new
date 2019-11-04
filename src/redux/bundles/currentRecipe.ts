import Recipe from "../../models/Recipe";

//region Types
interface AppState {
  currentRecipe: CurrentRecipeState
}

interface CurrentRecipeState {
  recipe?: Recipe
}

enum ActionType {
  SET_RECIPE
}

interface SetRecipeAction {
  type: ActionType.SET_RECIPE;
  recipe: Recipe
}

type Action = SetRecipeAction
//endregion

export default {
  name: 'currentRecipe',
  
  reducer: (state: CurrentRecipeState = {}, action: Action) => {
    switch (action.type) {
      case ActionType.SET_RECIPE:
        return { ...state, recipe: action.recipe };
      default:
        return state
    }
  },
  
  selectCurrentRecipe: (state: AppState) => state.currentRecipe.recipe,
  
  doSetRecipe: (recipe: Recipe) => ({ type: ActionType.SET_RECIPE, recipe })
}

