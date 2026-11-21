import type { PgDatabase, PgQueryResultHKT } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

/** Any Drizzle database on our schema: postgres-js in the app, PGlite in tests. */
export type Database = PgDatabase<PgQueryResultHKT, typeof schema>;

export function createDb(url: string) {
  return drizzle({ client: postgres(url), schema, casing: "snake_case" });
}
