# Postgres, Drizzle and Better Auth instead of Convex and Clerk

Our money and writer repos use Convex and Clerk. This repo does not, because a Self-hosted instance must run with no third-party accounts. We store all data in Postgres through Drizzle ORM, and handle sign-in with Better Auth, which keeps users and sessions in the same database. Docker Compose ships the app and Postgres together. The Hosted service points the same image at managed Postgres.

## Considered options

- SQLite: one container and one file to back up, but a harder path to scale the Hosted service.
- Auth.js: less built in. Better Auth's organization plugin already models membership in a Household.
- Authentik or Keycloak: a second server for self-hosters to run and update.

## Consequences

We lose Convex's live queries. Screens that need live updates need their own mechanism.
