import { Book } from "@/lib/types/Book";
import Image from "next/image";
import Link from "next/link";
import Typography from "../ui/Typography";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link href={`/dashboard/books/${book.id}`} className="group">
      <div className="flex flex-col gap-2 border rounded overflow-hidden">
        <div className="overflow-hidden aspect-[3/4] w-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/${book.image}`}
            alt={book.title}
            width={150}
            height={150}
            className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300 "
          />
        </div>
        <div className="px-4 py-2">
          <Typography variant="subtitle">{book.title}</Typography>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
