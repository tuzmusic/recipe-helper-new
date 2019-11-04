import { composeBundles } from 'redux-bundler'
import currentRecipeBundle from "./currentRecipe";

export default composeBundles(
  currentRecipeBundle
)
