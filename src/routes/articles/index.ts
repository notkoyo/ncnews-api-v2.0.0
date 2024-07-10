import {
  fetchArticles,
  fetchArticlesById,
  fetchCommentsByArticleId,
  postCommentByArticleId,
  updateArticleById,
} from "../../model";
import { Hono } from "hono";

const articles = new Hono().basePath("/articles");

articles.get("/", (c) => fetchArticles(c));
articles.get("/:article_id", (c) => fetchArticlesById(c));
articles.get("/:article_id/comments", (c) => fetchCommentsByArticleId(c));
articles.post("/:article_id/comments", (c) => postCommentByArticleId(c));
articles.patch("/:article_id", (c) => updateArticleById(c));

export default articles;
