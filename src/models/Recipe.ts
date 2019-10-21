import Ingredient from "./Ingredient";
import Instruction from "./Instruction";

// #region TYPES
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
// #endregion

export default class Recipe {
  title = "";
  slug = "";
  id: number | undefined;
  ingredients: Ingredient[] = [];
  instructions: Instruction[] = [];

  static fromApi(obj: RecipeApiObject): Recipe {
    const recipe: Recipe = Object.assign(new Recipe(), obj);
    recipe.ingredients = obj.ingredients.map(i => new Ingredient(i));
    recipe.instructions = obj.instructions.map(i => new Instruction(i));
    return recipe;
  }

  static fromSpoonacularApi({
    title,
    readyInMinutes,
    analyzedInstructions,
    extendedIngredients,
    servings,
    sourceUrl
  }: any): Recipe {
    const recipe = new Recipe();

    recipe.title = title;
    recipe.instructions = analyzedInstructions.map((i: any) =>
      Instruction.fromSpoonacularApi(i)
    );
    recipe.ingredients = extendedIngredients.map((i: any) =>
      Ingredient.fromSpoonacularApi(i)
    );

    return recipe;
  }
}
