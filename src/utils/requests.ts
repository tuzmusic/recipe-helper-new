import { SPOONACULAR_API_KEY } from './secrets';

export function recipeRequest(recipeUrl: string = '') {
    return {
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract',
        params: {
            url: recipeUrl
        },
        headers: {
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            'X-RapidAPI-Key': SPOONACULAR_API_KEY
        }
    }
}
