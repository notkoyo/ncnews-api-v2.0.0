import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export default function connect(dbUrl: string) {
  const sql = neon(dbUrl);
  const db = drizzle(sql);

  return db;
}
