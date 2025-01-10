"use client";

import { Button } from "@/components/ui/Button";
import useConfirm from "@/hooks/useConfirm";
import { deleteBook } from "@/lib/actions/book.actions";
import { Book } from "@/lib/types/Book";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Confirm from "../ui/Confirm";

interface DeleteBookButtonProps {
  book: Book;
  className?: string;
}
const DeleteBookButton = ({ book, className }: DeleteBookButtonProps) => {
  const router = useRouter();
  const { setOpen, confirmProps } = useConfirm({
    title: "Delete Book",
    description: "Are you sure you want to delete this book?",
    onConfirm: async () => {
      const response = await deleteBook(book.id);
      if (response.error) {
        toast.error(response.error, {
          description: response.message,
        });
      } else {
        router.push("/dashboard/books");
        toast.success("Book deleted successfully");
      }
    },
  });
  const handleDelete = async () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        onClick={handleDelete}
        variant="destructive"
        className={className}
      >
        Delete
      </Button>
      <Confirm {...confirmProps} />
    </>
  );
};

export default DeleteBookButton;
