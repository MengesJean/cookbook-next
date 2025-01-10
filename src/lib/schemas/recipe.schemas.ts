import { z } from "zod";
import { IngredientUnit } from "../types/Recipe";

export const ingredientSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
});

export const ingredientRecipeSchema = z.object({
  order: z.number().min(1),
  ingredient: ingredientSchema,
  quantity: z.string().min(1),
  unit: z.nativeEnum(IngredientUnit),
});

export const instructionSchema = z.object({
  order: z.number().min(1),
  title: z.string().min(1),
  instruction: z.string().min(1),
});

export const recipeSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  image: z.string().optional(),
  ingredients: z.array(ingredientRecipeSchema).optional(),
  instructions: z.array(instructionSchema).optional(),
  bookId: z.string().optional(),
  description: z.string().optional(),
});

export type RecipeSchema = z.infer<typeof recipeSchema>;
