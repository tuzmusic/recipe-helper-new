import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import { SpoonacularApiRecipe } from "../types/Recipe.types";

// region TYPES
export type RecipeApiObject = {
  title: string;
  slug: string;
  id: number;
  ingredients: IngredientApiObject[];
  instructions: InstructionApiObject[];
};

export type IngredientApiObject = {
  text: string;
};
export type InstructionApiObject = {
  text: string;
};
// endregion

export default class Recipe {
  title = "";
  slug = "";
  id: number | undefined;
  ingredients: Ingredient[] = [];
  instructions: Instruction[] = [];
  
  static fromSpoonacularApi({ title, analyzedInstructions, extendedIngredients }: SpoonacularApiRecipe): Recipe {
    const recipe = new Recipe();
    
    recipe.title = title;
  
    recipe.ingredients = extendedIngredients.map(ingredient =>
      Ingredient.fromSpoonacularApi(ingredient)
    );
  
    recipe.instructions = analyzedInstructions[0].steps.map(instruction =>
      Instruction.fromSpoonacularApi(instruction)
    ).filter(step => Instruction.isValidStep(step));
  
    // Now that we've filtered out bad instructions we can
    // fix their numbers and flesh out their ingredients
    recipe.instructions.forEach((inst, i) => {
      inst.number = i + 1;
    
      inst.ingredients = inst.ingredients.map((instructionIng) => {
        const fullIngredient = recipe.ingredients.find(
          recipeIng => recipeIng.id === instructionIng.id
        );
      
        // find could return null, so we'll "force-unwrap" this, which should be safe
        // (as long as the conversion API never includes an ingredient in an instruction
        // that isn't in the ingredients list)
        return fullIngredient || null
      }).filter(Boolean) as Ingredient[]
    });
    
    return recipe;
  }
}
