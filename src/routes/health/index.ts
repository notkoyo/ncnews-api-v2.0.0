import { Hono } from "hono"; 

const health = new Hono().basePath("health");

health.get("/", (c) => c.json({ "health": "Server is healthy." }));

export default health;