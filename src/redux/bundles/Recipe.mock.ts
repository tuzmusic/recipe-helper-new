import Recipe from "../../models/Recipe";
import Ingredient from "../../models/Ingredient";
import Instruction from "../../models/Instruction";

const mockRecipe = new Recipe();

mockRecipe.title = "Mock Recipe";
mockRecipe.slug = "mock_recipe";
mockRecipe.id = 1;
mockRecipe.ingredients = [
  '1 cup butter', '2 tsp sugar', '3 eggs'
].map(i => new Ingredient(i));

mockRecipe.instructions = [
  'First step', 'Second step', 'Third step'
].map(i => new Instruction(i));

export default mockRecipe;
