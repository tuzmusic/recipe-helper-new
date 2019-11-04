import { SpoonacularApiInstructionStep } from "../types/Recipe.types";
import Ingredient from "./Ingredient";

export default class Instruction {
    text = "";
    completed = false;
    ingredients: Ingredient[] = [];

    constructor(arg: PotentialConstructorArgument) {
        if (!arg) return;
        // allow creating an ingredient from a string
        if (typeof arg === "string") this.text = arg;
        // allow creating an ingredient from an object
        else if (typeof arg === "object") {
            this.text = arg.text;
        }
    }

    static fromSpoonacularApi({step, ingredients}: SpoonacularApiInstructionStep): Instruction {
        const inst = new Instruction(step);
        inst.ingredients = ingredients.map(ing => new Ingredient(ing));
        // TODO: handle ingredients
        return inst;
    }
}

type PotentialConstructorArgument = string | { text: string };
