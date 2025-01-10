import BookForm from "@/components/books/BookForm";
import DeleteBookButton from "@/components/books/DeleteBookButton";
import Typography from "@/components/ui/Typography";
import { getBook } from "@/lib/actions/book.actions";
import { notFound } from "next/navigation";

interface EditBookPageProps {
  params: {
    id: string;
  };
}

const EditBookPage = async ({ params }: EditBookPageProps) => {
  const { id } = await params;
  const book = await getBook(id);
  if (!book) {
    return notFound();
  }
  return (
    <div>
      <Typography variant="h1" tag="h1" className="mb-4">
        Edit book &quot;{book.title}&quot;
      </Typography>
      <BookForm book={book} />
      <DeleteBookButton book={book} className="mt-4" />
    </div>
  );
};

export default EditBookPage;
