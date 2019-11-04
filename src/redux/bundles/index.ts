import { composeBundles } from 'redux-bundler'
import currentRecipeBundle from "./currentRecipe";
// ... import other bundles

export default composeBundles(
  currentRecipeBundle
)
