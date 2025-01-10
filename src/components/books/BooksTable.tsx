import { Book } from "@/lib/types/Book";
import Typography from "../ui/Typography";
import BookCard from "./BookCard";

interface BooksTableProps {
  books: Book[];
}

const BooksTable = ({ books }: BooksTableProps) => {
  if (books.length === 0) {
    return (
      <div>
        <Typography variant="text">No books found</Typography>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksTable;
