import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  casing: "snake_case",
} satisfies Config;
