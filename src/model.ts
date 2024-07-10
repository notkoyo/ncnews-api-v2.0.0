import connect from "./db/database";
import { Context } from "hono";
import { users, topics, articles, comments } from "./db/schema";
import { eq } from "drizzle-orm";

const fetchUsers = async (c: Context) => {
  const db = connect(c.env.DATABASE_URL);
  const allUsers = await db.select().from(users);

  return c.json(allUsers);
};

const fetchTopics = async (c: Context) => {
  const db = connect(c.env.DATABASE_URL);
  const allTopics = await db.select().from(topics);

  return c.json(allTopics);
};

const fetchArticles = async (c: Context) => {
  const db = connect(c.env.DATABASE_URL);
  const allArticles = await db.select().from(articles);

  return c.json(allArticles);
};

const fetchArticlesById = async (c: Context) => {
  try {
    const db = connect(c.env.DATABASE_URL);
    const id: number = Number(c.req.param("article_id"));
    const allArticlesById = await db
      .select()
      .from(articles)
      .where(eq(articles.article_id, id));

    if (allArticlesById.length > 0) {
      return c.json(allArticlesById);
    } else {
      c.status(404);
      return c.json({ Error: "Article not found." });
    }
  } catch (error) {
    console.error(error);
  }
};

const fetchCommentsByArticleId = async (c: Context) => {
  try {
    const db = connect(c.env.DATABASE_URL);
    const id: number = Number(c.req.param("article_id"));
    const allCommentsById = await db
      .select()
      .from(comments)
      .where(eq(comments.article_id, id));

    if (allCommentsById.length > 0) {
      return c.json(allCommentsById);
    } else {
      c.status(404);
      return c.json({ Error: "No comments found." });
    }
  } catch (error) {
    console.error(error);
  }
};

const postCommentByArticleId = async (c: Context) => {
  try {
    const db = connect(c.env.DATABASE_URL);
    const article_id: number = Number(c.req.param("article_id"));
    const { username, body }: { username: string; body: string } =
      await c.req.json();

    const comment = await db
      .insert(comments)
      .values({
        body,
        article_id,
        author: username,
      })
      .returning();

    c.status(201);
    return c.json(comment);
  } catch (error) {
    console.error(error);
  }
};

const deleteCommentByCommentId = async (c: Context) => {
  try {
    const db = connect(c.env.DATABASE_URL);
    const comment_id: number = Number(c.req.param("comment_id"));
    const deletedComment = await db
      .delete(comments)
      .where(eq(comments.comment_id, comment_id))
      .returning();

    c.status(202);
    return c.json({
      message: `Comment with ID: ${deletedComment[0].comment_id} deleted.`,
      comment: deletedComment[0].body,
      author: deletedComment[0].author,
    });
  } catch (error) {
    console.error(error);
  }
};

const updateArticleById = async (c: Context) => {
  try {
    const db = connect(c.env.DATABASE_URL);
    const article_id: number = Number(c.req.param("article_id"));
    const body: {
      title?: string;
      body?: string;
      article_img_url?: string;
    } = await c.req.json();

    const updatedArticle = await db
      .update(articles)
      .set(body)
      .where(eq(articles.article_id, article_id))
      .returning();

    c.status(200);
    return c.json(updatedArticle);
  } catch (error) {
    console.error(error);
  }
};

export {
  fetchUsers,
  fetchTopics,
  fetchArticles,
  fetchArticlesById,
  fetchCommentsByArticleId,
  postCommentByArticleId,
  deleteCommentByCommentId,
  updateArticleById,
};