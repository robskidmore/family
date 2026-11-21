# PGlite for unit and integration tests

Sandcastle runs `pnpm test` inside containers that have no Postgres service. Vitest tests run against PGlite, a WASM build of Postgres that runs inside the test process. They use the same Drizzle schema and migrations as production. Playwright tests run against the real Postgres in Docker Compose, so they catch anything PGlite does differently.

We rejected Testcontainers because it would need Docker inside each sandcastle container. We rejected a mocked database because it would not run our migrations.
