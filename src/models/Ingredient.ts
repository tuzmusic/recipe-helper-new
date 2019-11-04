import { SpoonacularApiIngredient } from "../types/Recipe.types";

export default class Ingredient {
    name = "";
    id?: number;
    original = "";
    originalString = "";
    number: number | undefined;
    unit = "";

    constructor(arg?: PotentialConstructorArgument) {
        if (!arg) return;
        // allow creating an ingredient from a string
        if (typeof arg === "string") this.name = arg;
        // allow creating an ingredient from an object
        else if (typeof arg === "object") {
            this.name = arg.name || "";
            this.id = arg.id;
        }
    }

    static fromSpoonacularApi({
        id,
        name,
        original,
        originalString,
        amount,
        unit
    }: SpoonacularApiIngredient) {
        return Object.assign(new Ingredient(), {id, name, originalString, amount, unit});
    }
}

type PotentialConstructorArgument = string | { name?: string, id?: number };
