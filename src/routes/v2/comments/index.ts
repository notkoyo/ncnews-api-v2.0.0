import { deleteCommentByCommentId } from "../../../model";
import { Hono } from "hono";
import { commentIdSchema } from "../../../validation";
import { zValidator } from "@hono/zod-validator";

const comments = new Hono().basePath("/comments");

comments.delete("/:comment_id", zValidator("param", commentIdSchema), (c) => deleteCommentByCommentId(c));

export default comments;