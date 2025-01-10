import { Recipe } from "./Recipe";

export type Book = {
  id: string;
  title: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

export type BookWithRecipes = Book & {
  recipes: Recipe[];
};
