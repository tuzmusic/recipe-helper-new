export default class Instruction {
  text = "";
  completed = false;

  constructor(arg: PotentialConstructorArgument) {
    if (typeof arg === "string") this.text = arg;
    else if (typeof arg === "object") {
      this.text = arg.text;
    }
  }

  static fromSpoonacularApi({ step, ingredients }: any): Instruction {
    const inst = new Instruction(step);
    // TODO: handle ingredients
    return inst;
  }
}

type PotentialConstructorArgument = string | { text: string };
