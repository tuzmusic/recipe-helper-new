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

    static fromSpoonacularApi({title, analyzedInstructions, extendedIngredients}: SpoonacularApiRecipe): Recipe {
        const recipe = new Recipe();

        recipe.title = title;
        recipe.instructions = analyzedInstructions.map((instruction) =>
            Instruction.fromSpoonacularApi(instruction)
        );
        recipe.ingredients = extendedIngredients.map((ingredient) =>
            Ingredient.fromSpoonacularApi(ingredient)
        );

        return recipe;
    }
}
