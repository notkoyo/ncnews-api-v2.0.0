import {
  fetchArticles,
  fetchArticlesById,
  fetchCommentsByArticleId,
  postCommentByArticleId,
  updateArticleById,
} from "../../../model";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { articleIdSchema } from "../../../validation";

const articles = new Hono().basePath("/articles");

articles.get("/", (c) => fetchArticles(c));
articles.get("/:article_id", zValidator("param", articleIdSchema), (c) => fetchArticlesById(c));
articles.get("/:article_id/comments", zValidator("param", articleIdSchema), (c) => fetchCommentsByArticleId(c));
articles.post("/:article_id/comments", zValidator("param", articleIdSchema), (c) => postCommentByArticleId(c));
articles.patch("/:article_id", zValidator("param", articleIdSchema), (c) => updateArticleById(c));

export default articles;
