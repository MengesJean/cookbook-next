import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BooksFilterProps {
  className?: string;
}

const BooksFilter = ({ className }: BooksFilterProps) => {
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
        <Link href="/dashboard/books/create">
          <Button className="w-full md:w-auto">Add book</Button>
        </Link>
        <Button className="w-full md:w-auto" variant="outline">
          Filter
        </Button>
      </div>
    </div>
  );
};

export default BooksFilter;
