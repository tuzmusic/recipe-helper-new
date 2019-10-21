/* 
const endpoint =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract";
const params = {
  url: "http%3A%2F%2Fwww.melskitchencafe.com%2Fthe-best-fudgy-brownies%2F"
};
const headers = [
  { "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com" },
  { "X-RapidAPI-Key": "api key (see website, save and ignore)" }
]
 */

export default {
  vegetarian: true,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  weightWatcherSmartPoints: 8,
  gaps: "no",
  lowFodmap: false,
  ketogenic: false,
  whole30: false,
  sourceUrl: "http://www.melskitchencafe.com/the-best-fudgy-brownies/",
  spoonacularSourceUrl:
    "https://spoonacular.com/fudgy-brownies-think-homemade-brownies-like-the-boxed-mix-568604",
  aggregateLikes: 0,
  spoonacularScore: 6,
  healthScore: 0,
  pricePerServing: 21.77,
  extendedIngredients: [
    {
      id: 1001,
      aisle: "Milk, Eggs, Other Dairy",
      image: "butter-sliced.jpg",
      consitency: "solid",
      name: "butter",
      original: "10 tablespoons (1 1/4 sticks or 5 ounces) butter",
      originalString: "10 tablespoons (1 1/4 sticks or 5 ounces) butter",
      originalName: "(1 1/4 sticks or 5 ounces) butter",
      amount: 10,
      unit: "tablespoons",
      meta: ["()"],
      metaInformation: ["()"],
      measures: {
        us: {
          amount: 10,
          unitShort: "Tbsps",
          unitLong: "Tbsps"
        },
        metric: {
          amount: 10,
          unitShort: "Tbsps",
          unitLong: "Tbsps"
        }
      }
    },
    {
      id: 1123,
      aisle: "Milk, Eggs, Other Dairy",
      image: "egg.png",
      consitency: "solid",
      name: "eggs",
      original: "2 large eggs",
      originalString: "2 large eggs",
      originalName: "eggs",
      amount: 2,
      unit: "large",
      meta: [],
      metaInformation: [],
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
      id: 20081,
      aisle: "Baking",
      image: "flour.png",
      consitency: "solid",
      name: "flour",
      original: "1/2 cup (2 3/8 ounces) all-purpose flour",
      originalString: "1/2 cup (2 3/8 ounces) all-purpose flour",
      originalName: "1/2 cup all-purpose flour",
      amount: 2.375,
      unit: "ounces",
      meta: ["all-purpose"],
      metaInformation: ["all-purpose"],
      measures: {
        us: {
          amount: 2.375,
          unitShort: "oz",
          unitLong: "ounces"
        },
        metric: {
          amount: 67.33,
          unitShort: "g",
          unitLong: "grams"
        }
      }
    },
    {
      id: 2047,
      aisle: "Spices and Seasonings",
      image: "salt.jpg",
      consitency: "solid",
      name: "salt",
      original: "1/2 teaspoon salt",
      originalString: "1/2 teaspoon salt",
      originalName: "salt",
      amount: 0.5,
      unit: "teaspoon",
      meta: [],
      metaInformation: [],
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
    {
      id: 19335,
      aisle: "Baking",
      image: "sugar-in-bowl.png",
      consitency: "solid",
      name: "sugar",
      original: "1 1/4 cups (9 7/8 ounces) sugar",
      originalString: "1 1/4 cups (9 7/8 ounces) sugar",
      originalName: "1/4 cups sugar",
      amount: 9.875,
      unit: "ounces",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 9.875,
          unitShort: "oz",
          unitLong: "ounces"
        },
        metric: {
          amount: 279.952,
          unitShort: "g",
          unitLong: "grams"
        }
      }
    },
    {
      id: 19165,
      aisle: "Baking",
      image: "cocoa-powder.png",
      consitency: "solid",
      name: "unsweetened cocoa powder",
      original:
        "3/4 cup plus 2 tablespoons (2 7/8 ounces) unsweetened cocoa powder (natural or Dutch-process)",
      originalString:
        "3/4 cup plus 2 tablespoons (2 7/8 ounces) unsweetened cocoa powder (natural or Dutch-process)",
      originalName:
        "(2 7/8 ounces) unsweetened cocoa powder (natural or Dutch-process)",
      amount: 0.75,
      unit: "cup",
      meta: ["unsweetened", "()", "(natural or Dutch-process)"],
      metaInformation: ["unsweetened", "()", "(natural or Dutch-process)"],
      measures: {
        us: {
          amount: 0.75,
          unitShort: "cups",
          unitLong: "cups"
        },
        metric: {
          amount: 177.441,
          unitShort: "ml",
          unitLong: "milliliters"
        }
      }
    },
    {
      id: 2050,
      aisle: "Baking",
      image: "vanilla-extract.jpg",
      consitency: "solid",
      name: "vanilla extract",
      original: "1/2 teaspoon pure vanilla extract",
      originalString: "1/2 teaspoon pure vanilla extract",
      originalName: "pure vanilla extract",
      amount: 0.5,
      unit: "teaspoon",
      meta: ["pure"],
      metaInformation: ["pure"],
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
    }
  ],
  id: 568604,
  title: "Fudgy Brownies {Think: Homemade Brownies Like The Boxed Mix!}",
  readyInMinutes: 45,
  servings: 16,
  image: "https://spoonacular.com/recipeImages/568604-556x370.jpg",
  imageType: "jpg",
  cuisines: ["american"],
  dishTypes: [
    "antipasti",
    "starter",
    "snack",
    "appetizer",
    "antipasto",
    "hor d'oeuvre"
  ],
  diets: ["lacto ovo vegetarian"],
  occasions: [],
  winePairing: {
    pairedWines: [],
    pairingText: "",
    productMatches: []
  },
  instructions:
    "Position a rack in the lower third of the oven and preheat the oven to 325°F. Line the bottom and sides of an 8×8-inch square baking pan with parchment paper or foil, leaving an overhang on two opposite sides. Lightly grease with cooking spray and set aside.Combine the butter, sugar, cocoa, and salt in a medium microwave-wafe bowl. Microwave for one minute intervals, stirring in between, until the butter is melted and the mixture is smooth. Set the mixture aside until it cools slightly (is warm to the touch not hot). It will look gritty but it will become smooth once the other ingredients are added.Stir in the vanilla with a wooden spoon or rubber spatula. Add the eggs one at a time, stirring vigorously after each one. When the batter looks thick, shiny, and well blended, add the flour and stir until you cannot see it any longer, then beat vigorously for 40 strokes with the wooden spoon or a rubber spatula. Spread evenly in the lined pan.Bake until a toothpick inserted into the center emerges slightly moist with batter, 20 to 25 minutes. Let cool completely on a rack. After the brownies are cooled completely, I like to throw the pan in the refrigerator - cold brownies cut much easier and taste heavenly. Lift up the ends of the parchment or foil liner, and transfer the brownies to a cutting board. Cut into squares and serve.",
  analyzedInstructions: [
    {
      name: "",
      steps: [
        {
          number: 1,
          step:
            "Position a rack in the lower third of the oven and preheat the oven to 325°F. Line the bottom and sides of an 8×8-inch square baking pan with parchment paper or foil, leaving an overhang on two opposite sides. Lightly grease with cooking spray and set aside.",
          ingredients: [],
          equipment: [
            {
              id: 404770,
              name: "baking paper",
              image: "baking-paper.jpg"
            },
            {
              id: 404646,
              name: "baking pan",
              image: "roasting-pan.jpg"
            },
            {
              id: 404765,
              name: "aluminum foil",
              image: "aluminum-foil.png"
            },
            {
              id: 404784,
              name: "oven",
              image: "oven.jpg",
              temperature: {
                number: 325,
                unit: "Fahrenheit"
              }
            }
          ]
        },
        {
          number: 2,
          step:
            "Combine the butter, sugar, cocoa, and salt in a medium microwave-wafe bowl. Microwave for one minute intervals, stirring in between, until the butter is melted and the mixture is smooth. Set the mixture aside until it cools slightly (is warm to the touch not hot). It will look gritty but it will become smooth once the other ingredients are added.Stir in the vanilla with a wooden spoon or rubber spatula.",
          ingredients: [
            {
              id: 2050,
              name: "vanilla",
              image: "vanilla.jpg"
            },
            {
              id: 1001,
              name: "butter",
              image: "butter-sliced.jpg"
            },
            {
              id: 19165,
              name: "cocoa powder",
              image: "cocoa-powder.png"
            },
            {
              id: 19335,
              name: "sugar",
              image: "sugar-in-bowl.png"
            },
            {
              id: 2047,
              name: "salt",
              image: "salt.jpg"
            }
          ],
          equipment: [
            {
              id: 404732,
              name: "wooden spoon",
              image: "wooden-spoon.jpg"
            },
            {
              id: 404762,
              name: "microwave",
              image: "microwave.jpg"
            },
            {
              id: 404642,
              name: "spatula",
              image: "spatula-or-turner.jpg"
            },
            {
              id: 404783,
              name: "bowl",
              image: "bowl.jpg"
            }
          ]
        },
        {
          number: 3,
          step:
            "Add the eggs one at a time, stirring vigorously after each one. When the batter looks thick, shiny, and well blended, add the flour and stir until you cannot see it any longer, then beat vigorously for 40 strokes with the wooden spoon or a rubber spatula.",
          ingredients: [
            {
              id: 20081,
              name: "all purpose flour",
              image: "flour.png"
            },
            {
              id: 1123,
              name: "egg",
              image: "egg.png"
            }
          ],
          equipment: [
            {
              id: 404732,
              name: "wooden spoon",
              image: "wooden-spoon.jpg"
            },
            {
              id: 404642,
              name: "spatula",
              image: "spatula-or-turner.jpg"
            }
          ]
        },
        {
          number: 4,
          step: "Spread evenly in the lined pan.",
          ingredients: [],
          equipment: [
            {
              id: 404645,
              name: "frying pan",
              image: "pan.png"
            }
          ]
        },
        {
          number: 5,
          step:
            "Bake until a toothpick inserted into the center emerges slightly moist with batter, 20 to 25 minutes.",
          ingredients: [],
          equipment: [
            {
              id: 404644,
              name: "toothpicks",
              image: "toothpicks.jpg"
            }
          ],
          length: {
            number: 20,
            unit: "minutes"
          }
        },
        {
          number: 6,
          step:
            "Let cool completely on a rack. After the brownies are cooled completely, I like to throw the pan in the refrigerator - cold brownies cut much easier and taste heavenly. Lift up the ends of the parchment or foil liner, and transfer the brownies to a cutting board.",
          ingredients: [],
          equipment: [
            {
              id: 404716,
              name: "cutting board",
              image: "cutting-board.jpg"
            },
            {
              id: 404765,
              name: "aluminum foil",
              image: "aluminum-foil.png"
            },
            {
              id: 404645,
              name: "frying pan",
              image: "pan.png"
            }
          ]
        },
        {
          number: 7,
          step: "Cut into squares and serve.",
          ingredients: [],
          equipment: []
        }
      ]
    }
  ],
  sourceName: null,
  creditsText: null
};
