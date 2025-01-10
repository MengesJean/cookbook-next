import BookForm from "@/components/books/BookForm";
import Typography from "@/components/ui/Typography";

const CreateBookPage = async () => {
  return (
    <div>
      <Typography variant="h1" tag="h1" className="mb-4">
        Create
      </Typography>
      <BookForm />
    </div>
  );
};

export default CreateBookPage;
