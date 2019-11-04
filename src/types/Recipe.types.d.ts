export interface SpoonacularApiRecipe {
    sourceUrl: string;
    extendedIngredients: SpoonacularApiIngredient[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    image: string;
    imageType: string;
    instructions: string;
    analyzedInstructions: SpoonacularApiInstructionStep[]
}

export interface SpoonacularApiInstructionStep {
    number: number;
    step: string;
    ingredients: [];
    equipment: Imaged[]
}

export interface Imaged {
    id: number;
    name: string;
    image: string;
}

export interface SpoonacularApiIngredient {
    id: number;
    name: string;
    original: string;
    originalString: string;
    originalName: string;
    amount: number,
    unit: string,
    measures: {
        us: Measure
        metric: Measure
    }
}

export interface Measure {
    amount: number;
    unitShort: string;
    unitLong: string;
}
