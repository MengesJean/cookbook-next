"use server";

import { Book, BookWithRecipes } from "@/lib/types/Book";
import { BookSchema } from "../schemas/book.schemas";
import { getRecipes } from "./recipe.actions";

export const getBooks = async (): Promise<Book[]> => {
  try {
    const books = Array.from({ length: 10 }, (_, index) => ({
      id: (index + 1).toString(),
      title: `Book ${index + 1}`,
      image: `https://via.placeholder.com/150`,
      recipes: [
        {
          id: "1",
          title: "Recipe 1",
          image: "https://via.placeholder.com/150",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "2",
          title: "Recipe 2",
          image: "https://via.placeholder.com/150",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "3",
          title: "Recipe 3",
          image: "https://via.placeholder.com/150",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "4",
          title: "Recipe 4",
          image: "https://via.placeholder.com/150",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return books;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch books");
  }
};

export const getBook = async (id: string): Promise<BookWithRecipes> => {
  try {
    const books = await getBooks();
    const book = books.find((book) => book.id === id);
    if (!book) {
      throw new Error("Book not found");
    }
    const recipes = await getRecipes();
    return {
      ...book,
      recipes: recipes.filter((recipe) => recipe.bookId === id),
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch book");
  }
};

export const createBook = async (book: BookSchema) => {
  console.log(book);
};

export const updateBook = async (book: BookSchema) => {
  console.log(book);
};
