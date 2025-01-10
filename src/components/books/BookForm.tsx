"use client";

import { Button } from "@/components/ui/Button";
import FormField from "@/components/ui/FormField";
import ImageUpload from "@/components/ui/ImageUpload";
import Input from "@/components/ui/Input";
import { createBook, updateBook } from "@/lib/actions/book.actions";
import { BookSchema, bookSchema } from "@/lib/schemas/book.schemas";
import { BookFormType } from "@/lib/types/Book";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
interface BookFormProps {
  book?: BookFormType;
}
const BookForm = ({ book }: BookFormProps) => {
  const router = useRouter();
  if (book?.image) {
    book.imagePreview = `${process.env.NEXT_PUBLIC_API_URL}/${book.image}`;
  }
  console.log(book);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookSchema>({
    resolver: zodResolver(bookSchema),
    defaultValues: book || {
      id: undefined,
      title: "",
      imagePreview: undefined,
    },
  });

  const onSubmit = async (data: BookSchema) => {
    try {
      const response = await (book?.id ? updateBook(data) : createBook(data));
      console.log(response);
      if (response.error) {
        throw new Error("Failed to save book");
      }
      router.push(`/dashboard/books/${response.id || book?.id}`);
      toast.success(`Book ${book?.id ? "updated" : "created"} successfully`);
    } catch (error) {
      console.error(error);
      toast.error(`Failed to ${book?.id ? "update" : "create"} book`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors && <div>{errors.id?.message}</div>}
      <div className="grid md:grid-cols-2 gap-2">
        <FormField
          register={register("title")}
          label="Title"
          placeholder="Title"
          error={errors.title?.message}
          render={({ field }) => {
            return <Input {...field} className="w-full" />;
          }}
        />
        <FormField
          register={register("imagePreview")}
          label="Image"
          error={errors.imagePreview?.message}
          render={({ field }) => {
            return (
              <ImageUpload
                value={book?.imagePreview}
                name="imagePreview"
                onChange={(e) => {
                  field.onChange(e);
                }}
                className="w-full"
              />
            );
          }}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default BookForm;
