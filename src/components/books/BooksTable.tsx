"use client";
import { Book } from "@/lib/types/Book";
import { use } from "react";
import Typography from "../ui/Typography";
import BookCard from "./BookCard";

interface BooksTableProps {
  booksPromise: Promise<Book[]>;
}

const BooksTable = ({ booksPromise }: BooksTableProps) => {
  const books = use(booksPromise);

  if (!books || books.length === 0) {
    return (
      <div>
        <Typography variant="text">No books found</Typography>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksTable;
