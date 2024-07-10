import { Hono } from "hono";
import { articles, comments, health, topics, users } from "./routes";

export type Env = {
  DATABASE_URL: string;
}

const app = new Hono<{ Bindings: Env }>().basePath("/api/v2");

app.notFound((c) => c.text("Endpoint not found", 404));

app.onError((err, c) => {
  console.error(`Error: ${err}`);
  return c.text("Server Error", 500);
});

app.route("/", health);
app.route("/", users);
app.route("/", topics);
app.route("/", articles);
app.route("/", comments);

export default app;
