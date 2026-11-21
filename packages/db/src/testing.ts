import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";

import type { Database } from "./client";
import { migrationsFolder } from "./migrate";
import * as schema from "./schema";

/** A fresh in-process Postgres with every migration applied. */
export async function createTestDb(): Promise<Database> {
  const db = drizzle({ client: new PGlite(), schema, casing: "snake_case" });
  await migrate(db, { migrationsFolder });
  return db;
}
