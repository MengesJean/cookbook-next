import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface RecipesFilterProps {
  bookId?: string;
  className?: string;
}

const RecipesFilter = ({ bookId, className }: RecipesFilterProps) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row justify-between md:items-center gap-2",
        className
      )}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-full md:max-w-md border border-foreground text-gray-900 rounded px-4 py-2"
      />
      <div className="flex md:items-center md:justify-between space-x-4">
        <Link href={`/dashboard/recipes/create`}>
          <Button className="w-full md:w-auto">Add recipe</Button>
        </Link>
        <Button className="w-full md:w-auto" variant="outline">
          Filter
        </Button>
        {bookId && (
          <Link href={`/dashboard/books/${bookId}/edit`}>
            <Button className="w-full md:w-auto">Edit book</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default RecipesFilter;
