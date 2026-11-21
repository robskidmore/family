# Live updates through Postgres LISTEN/NOTIFY and server-sent events

ADR 0003 drops Convex, so we lose its live queries. A grocery List needs them: one person shops while another adds items at home. After each write, the server runs a Postgres NOTIFY on the Household's channel. Each open browser holds a server-sent event stream for its Household, and a notice makes the client refetch the matching queries. The event carries no data, only what changed, so the normal API still enforces access.

## Considered options

- Refetch on focus only: two people on one List would see stale items.
- A sync engine such as Zero or ElectricSQL: another container for self-hosters to run, and a second data path to secure.
