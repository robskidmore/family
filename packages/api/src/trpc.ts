import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { z, ZodError } from "zod/v4";

import type { Database } from "@family/db";

/**
 * Request context for every procedure. The web app builds it per request;
 * tests build it directly around a PGlite database.
 */
export function createTRPCContext(opts: { db: Database; headers: Headers }) {
  return { db: opts.db, headers: opts.headers };
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter: ({ shape, error }) => ({
    ...shape,
    data: {
      ...shape.data,
      zodError:
        error.cause instanceof ZodError
          ? z.flattenError(error.cause as ZodError<Record<string, unknown>>)
          : null,
    },
  }),
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const publicProcedure = t.procedure;
