import { shrimpCurryResponse } from "../api-data/spoonacular-api/malaysianShrimpCurry";
import Recipe from "./Recipe";
import Ingredient from "./Ingredient";

describe('Finding recipes in an instruction', () => {
  const recipe = Recipe.fromSpoonacularApi(shrimpCurryResponse);
  const step = recipe.instructions[0];
  const expectedIngredientNames = [
    'coriander',
    'cumin',
    'peppercorns',
    'paprika',
    'cayenne pepper', // in orig instruction ingredients as 'ground cayenne pepper'
    'turmeric',
    'ginger',
    'garlic',
    // 'water' // not in ingredient list
  ];
  it('finds the rigbt ingredients in a step', () => {
    const actualIngredientNames = step.ingredients.map(i => i.name);
    expect(actualIngredientNames).toEqual(expect.arrayContaining(expectedIngredientNames))
  });
});

describe('Ingredient base name', () => {
  const baseNameFrom = (name: string): string => Ingredient.baseNameForIngredient(new Ingredient(name));
  it('works for coriander seeds', () => {
    expect(baseNameFrom('whole coriander seeds')).toEqual('coriander')
  });
  it('works for ground cayenne', () => {
    expect(baseNameFrom('ground cayenne pepper')).toEqual('cayenne')
  });
  it('works for minced garlic', () => {
    expect(baseNameFrom('peeled minced garlic')).toEqual('garlic')
  });
});
