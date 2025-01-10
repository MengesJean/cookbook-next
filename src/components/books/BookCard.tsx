import { Book } from "@/lib/types/Book";
import Image from "next/image";
import Typography from "../ui/Typography";
import Link from "next/link";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link href={`/dashboard/books/${book.id}`}>
      <div className="flex flex-col gap-2 border rounded overflow-hidden">
        <Image
          src={book.image}
          alt={book.title}
          width={150}
          height={150}
          className="w-full h-auto object-cover"
        />
        <div className="px-4 py-2">
          <Typography variant="subtitle">{book.title}</Typography>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
