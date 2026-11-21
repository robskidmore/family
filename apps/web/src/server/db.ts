import { createDb } from "@family/db/client";

import { env } from "~/env";

const globalForDb = globalThis as unknown as {
  db?: ReturnType<typeof createDb>;
};

/** One connection pool per server process, kept across dev hot reloads. */
export const db = (globalForDb.db ??= createDb(env.DATABASE_URL));
