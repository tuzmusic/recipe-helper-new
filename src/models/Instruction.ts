import { SpoonacularApiInstructionStep } from "../types/Recipe.types";
import Ingredient from "./Ingredient";

export default class Instruction {
  text = "";
  completed = false;
  ingredients: Ingredient[] = [];
  number?: number;
  
  constructor(arg: PotentialConstructorArgument) {
    if (!arg) return;
    // allow creating an ingredient from a string
    if (typeof arg === "string") this.text = arg;
    // allow creating an ingredient from an object
    else if (typeof arg === "object") {
      this.text = arg.text;
    }
  }
  
  static fromSpoonacularApi({ step, ingredients, number }: SpoonacularApiInstructionStep): Instruction {
    // if (!Instruction.isValidStep(step)) return null;
    
    const inst = new Instruction(step);
    
    // These will get transformed in the recipe converter
    // after we know everything about the recipe.
    inst.number = Number(number);
    inst.ingredients = ingredients.map(ing => new Ingredient(ing));
    return inst;
  }
  
  static isValidStep({ text }: Instruction) {
    let valid = true;
    valid = valid && (!text.match(/Step \d+$/));
    valid = valid && (!text.match(/Advertisement/));
    return valid;
  }
}

type PotentialConstructorArgument = string | { text: string };
