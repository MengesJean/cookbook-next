import BookForm from "@/components/books/BookForm";
import Typography from "@/components/ui/Typography";
import { getBook } from "@/lib/actions/book.actions";

interface EditBookPageProps {
  params: {
    id: string;
  };
}

const EditBookPage = async ({ params }: EditBookPageProps) => {
  const { id } = await params;
  const book = await getBook(id);
  return (
    <div>
      <Typography variant="h1" tag="h1" className="mb-4">
        Edit book {id}
      </Typography>
      <BookForm book={book} />
    </div>
  );
};

export default EditBookPage;
