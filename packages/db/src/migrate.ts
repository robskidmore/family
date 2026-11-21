import { fileURLToPath } from "node:url";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

export const migrationsFolder = fileURLToPath(
  new URL("../migrations", import.meta.url),
);

/** Applies every pending migration. Safe to run on each boot. */
export async function runMigrations(url: string) {
  // Re-runs log "already exists" notices that mean nothing here.
  const client = postgres(url, { max: 1, onnotice: () => undefined });
  try {
    await migrate(drizzle({ client }), { migrationsFolder });
  } finally {
    await client.end();
  }
}
