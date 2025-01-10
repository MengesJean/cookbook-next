"use server";
import { RecipeSchema } from "../schemas/recipe.schemas";
import { IngredientUnit, Recipe } from "../types/Recipe";

export const getRecipes = async (): Promise<Recipe[]> => {
  try {
    const recipes = Array.from({ length: 10 }, (_, index) => ({
      id: (index + 1).toString(),
      title: `Recipe ${index + 1}`,
      image: `https://via.placeholder.com/150`,
      description: `Description ${index + 1}`,
      ingredients: [
        {
          order: 1,
          ingredient: { id: "1", name: "Ingredient 1" },
          quantity: "100",
          unit: IngredientUnit.GRAM,
        },
        {
          order: 2,
          ingredient: { id: "2", name: "Ingredient 2" },
          quantity: "200",
          unit: IngredientUnit.GRAM,
        },
        {
          order: 3,
          ingredient: { id: "3", name: "Ingredient 3" },
          quantity: "300",
          unit: IngredientUnit.GRAM,
        },
      ],
      instructions: [
        {
          order: 1,
          title: "Instruction 1",
          instruction: "Instruction 1",
        },
        {
          order: 2,
          title: "Instruction 2",
          instruction: "Instruction 2",
        },
        {
          order: 3,
          title: "Instruction 3",
          instruction: "Instruction 3",
        },
      ],
      bookId: (index + 1).toString(),
      book: {
        id: (index + 1).toString(),
        title: `Book ${index + 1}`,
        image: `https://via.placeholder.com/150`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return recipes;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch recipes");
  }
};

export const getRecipe = async (id: string): Promise<Recipe> => {
  try {
    const recipes = await getRecipes();
    const recipe = recipes.find((recipe) => recipe.id === id);
    if (!recipe) {
      throw new Error("Recipe not found");
    }
    return recipe;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch recipe");
  }
};

export const createRecipe = async (recipe: RecipeSchema) => {
  console.log(recipe);
};

export const updateRecipe = async (recipe: RecipeSchema) => {
  console.log(recipe);
};
