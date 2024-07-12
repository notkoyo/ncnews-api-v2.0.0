import { fetchTopics } from "../../../model";
import { Hono } from "hono";

const topics = new Hono().basePath("/topics");

topics.get("/", (c) => fetchTopics(c));

export default topics;