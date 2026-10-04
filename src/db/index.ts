import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL;

const globalForDb = globalThis as unknown as {
  __diyCoursePool?: Pool;
};

function createDb() {
  if (!databaseUrl) return null;
  const pool =
    globalForDb.__diyCoursePool ?? new Pool({ connectionString: databaseUrl });
  if (process.env.NODE_ENV !== "production") {
    globalForDb.__diyCoursePool = pool;
  }
  return drizzle(pool);
}

/**
 * Optional Postgres connection. Null when DATABASE_URL is not set.
 * The course stores progress in the visitor's browser (localStorage),
 * so the site runs fully without a database.
 */
export const db = createDb();
