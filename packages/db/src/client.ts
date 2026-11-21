import type { PgDatabase, PgQueryResultHKT } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

/** Any Drizzle database on our schema: postgres-js in the app, PGlite in tests. */
export type Database = PgDatabase<PgQueryResultHKT, typeof schema>;

/** Options every Drizzle database on our schema shares, whatever the driver. */
export const drizzleOptions = { schema, casing: "snake_case" } as const;

export function createDb(url: string) {
  return drizzle({ client: postgres(url), ...drizzleOptions });
}
