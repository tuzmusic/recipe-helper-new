import { SpoonacularApiRecipe } from "../types/Recipe.types";

describe('Recipe.fromSpoonacularApiObject', () => {
    const obj: SpoonacularApiRecipe = {
        sourceUrl: 'whatever.com',
        extendedIngredients: [
            {
                id: 1123,
                name: "eggs",
                original: "2 large eggs",
                originalString: "2 large eggs",
                originalName: "eggs",
                amount: 2,
                unit: "large",
                measures: {
                    us: {
                        amount: 2,
                        unitShort: "large",
                        unitLong: "larges"
                    },
                    metric: {
                        amount: 2,
                        unitShort: "large",
                        unitLong: "larges"
                    }
                }
            },
            {
                id: 2047,
                name: "salt",
                original: "1/2 teaspoon salt",
                originalString: "1/2 teaspoon salt",
                originalName: "salt",
                amount: 0.5,
                unit: "teaspoon",
                measures: {
                    us: {
                        amount: 0.5,
                        unitShort: "tsps",
                        unitLong: "teaspoons"
                    },
                    metric: {
                        amount: 0.5,
                        unitShort: "tsps",
                        unitLong: "teaspoons"
                    }
                }
            },
        ]
    }
});
