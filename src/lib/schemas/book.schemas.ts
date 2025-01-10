import { z } from "zod";

export const bookSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  imagePreview: z.instanceof(File).or(z.string()).optional(),
});

export type BookSchema = z.infer<typeof bookSchema>;
