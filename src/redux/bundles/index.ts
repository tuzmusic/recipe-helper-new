import { composeBundles } from 'redux-bundler'
import currentRecipe from "./currentRecipe";

export default composeBundles(
  currentRecipe
)
