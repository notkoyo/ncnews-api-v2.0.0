import { Hono } from "hono";
import users from "./users";
import health from "./health";
import articles from "./articles";
import topics from "./topics";
import comments from "./comments";

const v2 = new Hono();

v2.route("/", health);
v2.route("/", users);
v2.route("/", topics);
v2.route("/", articles);
v2.route("/", comments);

export default v2;