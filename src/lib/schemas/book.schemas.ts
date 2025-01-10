import { z } from "zod";

export const bookSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  image: z.string().min(1),
});

export type BookSchema = z.infer<typeof bookSchema>;
