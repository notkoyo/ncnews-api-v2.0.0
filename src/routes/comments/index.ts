import { deleteCommentByCommentId } from "../../model";
import { Hono } from "hono";

const comments = new Hono().basePath("/comments");

comments.delete("/:comment_id", (c) => deleteCommentByCommentId(c));

export default comments;