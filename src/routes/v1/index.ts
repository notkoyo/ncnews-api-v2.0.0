import { Hono } from "hono";

const v1 = new Hono();

v1.get("*", (c) => c.json({ message: "V1 is now deprecated" }));

export default v1;