import RecipesFilter from "@/components/recipes/RecipesFilter";
import RecipesTable from "@/components/recipes/RecipesTable";
import Typography from "@/components/ui/Typography";
import { getBook } from "@/lib/actions/book.actions";
import Image from "next/image";
const BookPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const book = await getBook(id);
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <Typography variant="h1" tag="h1" className="mb-4">
          {book.title}
        </Typography>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/${book.image}`}
          alt={book.title}
          width={150}
          height={150}
        />
      </div>
      <RecipesFilter bookId={book.id} className="mb-4" />
      <RecipesTable recipes={book.recipes || null} />
    </div>
  );
};

export default BookPage;
