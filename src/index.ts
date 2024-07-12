import { Hono } from "hono";
import v1 from "./routes/v1";
import v2 from "./routes/v2";
import { Env } from "./types";

const app = new Hono<{ Bindings: Env }>().basePath("/api");

app.notFound((c) => c.text("Endpoint not found", 404));

app.onError((err, c) => {
  console.error(`Error: ${err}`);
  return c.text("Server Error", 500);
});

app.route("/v1", v1);
app.route("/v2", v2);

export default app;
