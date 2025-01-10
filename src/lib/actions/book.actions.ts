"use server";

import { BookSchema } from "@/lib/schemas/book.schemas";
import { Book, BookWithRecipes } from "@/lib/types/Book";
import { revalidatePath } from "next/cache";

export const getBooks = async (): Promise<Book[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
      cache: "force-cache",
    });
    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch books");
  }
};

export const getBook = async (id: string): Promise<BookWithRecipes | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/books/${id}`,
      {
        cache: "force-cache",
      }
    );
    if (!response.ok) {
      return null;
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch book");
  }
};

export const createBook = async (book: BookSchema) => {
  try {
    const formData = new FormData();
    formData.append("title", book.title);
    if (book.imagePreview instanceof File) {
      formData.append("image", book.imagePreview);
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
      method: "POST",
      body: formData,
    });
    revalidatePath("/dashboard/books");
    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create book");
  }
};

export const updateBook = async (book: BookSchema) => {
  try {
    const formData = new FormData();
    formData.append("title", book.title);
    if (book.imagePreview instanceof File) {
      formData.append("image", book.imagePreview);
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/books/${book.id}`,
      {
        method: "PATCH",
        body: formData,
      }
    );
    revalidatePath(`/dashboard/books/${book.id}`);
    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update book");
  }
};

export const deleteBook = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/books/${id}`,
      {
        method: "DELETE",
      }
    );
    revalidatePath("/dashboard/books");
    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete book");
  }
};
