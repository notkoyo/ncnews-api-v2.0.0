import { fetchUsers } from "../../../model";
import { Hono } from "hono";

const users = new Hono().basePath("/users");

users.get("/", (c) => fetchUsers(c));

export default users;