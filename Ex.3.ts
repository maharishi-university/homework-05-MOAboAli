interface Root {
    recipes: Recipe[]
    total: number
    skip: number
    limit: number
}

interface Recipe {
    id: number
    name: string
    ingredients: string[]
    instructions: string[]
    prepTimeMinutes: number
    cookTimeMinutes: number
    servings: number
    difficulty: string
    cuisine: string
    caloriesPerServing: number
    tags: string[]
    userId: number
    image: string
    rating: number
    reviewCount: number
    mealType: string[]
}


export async function getData() {
    try {
        const rawResponse: Response = await fetch('https://dummyjson.com/recipes');
        const jsonBody: Root = await rawResponse.json();
        console.log(jsonBody.recipes.length)
        console.log(jsonBody.recipes.forEach(x => console.log(x.name)));
        const recipeNames = jsonBody.recipes.map(x => x.name);
        console.log(recipeNames);
    }
    catch (error) {
        console.error('An error occurred:', error.message);
    }
}


