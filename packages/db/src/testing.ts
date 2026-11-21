import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";

import type { Database } from "./client";
import { drizzleOptions } from "./client";
import { migrationsFolder } from "./migrate";

/** A fresh in-process Postgres with every migration applied. */
export async function createTestDb(): Promise<Database> {
  const db = drizzle({ client: new PGlite(), ...drizzleOptions });
  await migrate(db, { migrationsFolder });
  return db;
}
