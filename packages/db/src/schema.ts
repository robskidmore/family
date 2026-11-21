import { pgTable } from "drizzle-orm/pg-core";

/**
 * One row per instance. Holds values the instance generates for itself on
 * first boot, so a self-hoster never has to set them.
 */
export const instanceSettings = pgTable("instance_settings", (t) => ({
  id: t.text().primaryKey().default("instance"),
  vapidPublicKey: t.text(),
  vapidPrivateKey: t.text(),
  createdAt: t.timestamp({ withTimezone: true }).defaultNow().notNull(),
}));
