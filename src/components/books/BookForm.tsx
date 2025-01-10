"use client";

import { createBook, updateBook } from "@/lib/actions/book.actions";
import { BookSchema, bookSchema } from "@/lib/schemas/book.schemas";
import { BookWithRecipes } from "@/lib/types/Book";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import FormField from "../ui/FormField";
import Input from "../ui/Input";

interface BookFormProps {
  book?: BookWithRecipes;
}
const BookForm = ({ book }: BookFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookSchema>({
    resolver: zodResolver(bookSchema),
    defaultValues: book || {
      id: undefined,
      title: "",
      image: "",
    },
  });

  const onSubmit = async (data: BookSchema) => {
    console.log(data);
    if (book?.id) {
      await updateBook(data);
    } else {
      await createBook(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {book?.id && (
        <FormField
          register={register("id")}
          render={({ field }) => <Input {...field} type="text" />}
        />
      )}
      <div className="grid md:grid-cols-2 gap-2">
        <FormField
          register={register("title")}
          label="Title"
          placeholder="Title"
          error={errors.title?.message}
          render={({ field }) => <Input {...field} className="w-full" />}
        />
        <FormField
          register={register("image")}
          label="Image"
          placeholder="Image"
          error={errors.image?.message}
          render={({ field }) => <Input {...field} className="w-full" />}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default BookForm;
