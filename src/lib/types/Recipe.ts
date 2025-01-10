import { Book } from "@/lib/types/Book";

export type Recipe = {
  id: string;
  title: string;
  description?: string;
  image?: string;
  ingredients: RecipeIngredient[];
  instructions: RecipeInstruction[];
  bookId: string;
  book: Book;
  createdAt: Date;
  updatedAt: Date;
};

export type Ingredient = {
  id: string;
  name: string;
};

export type RecipeIngredient = {
  order: number;
  ingredient: Ingredient;
  quantity: string;
  unit: IngredientUnitType;
};

export type RecipeInstruction = {
  order: number;
  title: string;
  instruction: string;
};

export const IngredientUnit = {
  GRAM: "GRAM",
  KILOGRAM: "KILOGRAM",
  MILLILITER: "MILLILITER",
  CENTILITER: "CENTILITER",
  LITER: "LITER",
  PIECE: "PIECE",
  TEASPOON: "TEASPOON",
  TABLESPOON: "TABLESPOON",
  CUP: "CUP",
} as const;

export type IngredientUnitType =
  (typeof IngredientUnit)[keyof typeof IngredientUnit];
