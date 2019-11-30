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
  
      // convert each simple ingredient object to its corresponding item from the actual list of ingredients.
      // todo: improve parser for finding ingredients in a step
      inst.ingredients = inst.ingredients.map((instructionIng) =>
        recipe.ingredients
          .find(recipeIng => recipeIng.id === instructionIng.id))
        .filter(Boolean) as Ingredient[] // filter out ingredients that weren't found and thus returned null
    });
  
    return recipe;
  }
  
  private static ingredientsInInstructions(inst: Instruction, recipe: Recipe): Ingredient[] {
    return inst.ingredients.map((instructionIng) => {
      const fullIngredient = recipe.ingredients.find(
        recipeIng => recipeIng.id === instructionIng.id
      );
      return fullIngredient || null
    }).filter(Boolean) as Ingredient[]
  }
}
