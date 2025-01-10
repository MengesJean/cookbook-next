import BooksFilter from "@/components/books/BooksFilter";
import BooksTable from "@/components/books/BooksTable";
import Typography from "@/components/ui/Typography";
import { getBooks } from "@/lib/actions/book.actions";

const BooksPage = async () => {
  const books = await getBooks();
  return (
    <div>
      <Typography variant="h1" tag="h1" className="mb-4">
        Books
      </Typography>
      <BooksFilter className="mb-4" />
      <BooksTable books={books} />
    </div>
  );
};

export default BooksPage;
