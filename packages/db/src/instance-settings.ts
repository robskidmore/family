import type { Database } from "./client";
import { instanceSettings } from "./schema";

/** Reads the instance's single settings row, creating it on first read. */
export async function getInstanceSettings(db: Database) {
  await db.insert(instanceSettings).values({}).onConflictDoNothing();
  const [settings] = await db.select().from(instanceSettings).limit(1);
  if (!settings) throw new Error("Instance settings row is missing");
  return settings;
}
