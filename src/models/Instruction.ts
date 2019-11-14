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
  
  static fromSpoonacularApi({ step, ingredients, number }: SpoonacularApiInstructionStep): Instruction | null {
    if (!Instruction.isValidStep(step)) return null;
    const inst = new Instruction(step);
    inst.number = Number(number);
    inst.ingredients = ingredients.map(ing => new Ingredient(ing));
    return inst;
  }
  
  private static isValidStep(step: string) {
    let valid = true;
    valid = valid && (!step.match(/Step \d+$/));
    valid = valid && (!step.match(/Advertisement/));
    return valid;
  }
}

type PotentialConstructorArgument = string | { text: string };
