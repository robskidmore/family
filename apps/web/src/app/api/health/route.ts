import { sql } from "@family/db";

import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await db.execute(sql`select 1`);
    return Response.json({ status: "ok" });
  } catch {
    return Response.json({ status: "database unavailable" }, { status: 503 });
  }
}
