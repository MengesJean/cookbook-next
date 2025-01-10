import BooksFilter from "@/components/books/BooksFilter";
import BooksTable from "@/components/books/BooksTable";
import Loading from "@/components/ui/Loading";
import Typography from "@/components/ui/Typography";
import { getBooks } from "@/lib/actions/book.actions";
import { Suspense } from "react";

const BooksPage = () => {
  const books = getBooks();
  return (
    <div>
      <Typography variant="h1" tag="h1" className="mb-4">
        Books
      </Typography>
      <BooksFilter className="mb-4" />
      <Suspense fallback={<Loading />}>
        <BooksTable booksPromise={books} />
      </Suspense>
    </div>
  );
};

export default BooksPage;
