export default class Ingredient {
  text = "";
  id: number | undefined;
  original = "";
  originalString = "";
  number: number | undefined;
  unit = "";

  constructor(arg?: PotentialConstructorArgument) {
    if (!arg) return;
    if (typeof arg === "string") this.text = arg;
    else if (typeof arg === "object") {
      this.text = arg.text;
    }
  }

  static fromSpoonacularApi({
    id,
    name,
    original,
    originalString,
    amount,
    unit
  }: any) {
    const ing = new Ingredient();
    const text = name;
    Object.assign(ing, { id, text, originalString, amount, unit });
    return ing;
  }
}

type PotentialConstructorArgument = string | { text: string };
