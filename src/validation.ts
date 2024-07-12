import { z } from "zod";

export const articleIdSchema = z.object({
  article_id: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Article ID must be a number",
  }),
});

export const commentIdSchema = z.object({
  comment_id: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Comment ID must be a number",
  }),
});
