import RecipesFilter from "@/components/recipes/RecipesFilter";
import RecipesTable from "@/components/recipes/RecipesTable";
import Loading from "@/components/ui/Loading";
import Typography from "@/components/ui/Typography";
import { getBook } from "@/lib/actions/book.actions";
import { BookWithRecipes } from "@/lib/types/Book";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense, use } from "react";

const BookPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const book = getBook(id);
  return (
    <Suspense fallback={<Loading />}>
      <RecipeContent bookPromise={book} />
    </Suspense>
  );
};

export const RecipeContent = ({
  bookPromise,
}: {
  bookPromise: Promise<BookWithRecipes | null>;
}) => {
  const book = use(bookPromise);
  if (!book) {
    notFound();
  }
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
