import type { SandcastleRunnerConfigInput } from "@herdr/sandcastle-runner";

export default {
  imageName: "sandcastle-family",
  typecheckCommand: "pnpm typecheck",
  testCommand: "pnpm test",
  codingStandards: `Watch for these seven shapes in the diff. Each is a heuristic, not a
violation: name it, quote the hunk, and call it a judgement call. Skip what the
typechecker or the linter catches, and let any rule this repo documents win.

- **Feature Envy.** A function reaches into another object's data more than its own. Move it onto that data.
- **Data Clumps.** The same few fields keep travelling together. A type wants to be born: bundle them.
- **Primitive Obsession.** A string or number standing in for a domain concept. Give it its own type.
- **Repeated Switches.** The same switch or if-cascade on one type, in several places. Use polymorphism, or one shared map.
- **Divergent Change.** One file edited for unrelated reasons. Split it so each module changes for one reason.
- **Message Chains.** Long \`a.b().c().d()\` the caller should not depend on. Hide the walk behind one method.
- **Refused Bequest.** An implementer overrides most of what it inherits. Drop the inheritance and compose.

The rules below are not heuristics. A diff that breaks one is a finding: fix it
inside the diff's scope, or comment it on the issue.

- Names come from \`GLOSSARY.md\`. Each entry's _Avoid_ list is banned in identifiers, comments and tests, not only in prose.
- Every Household-scoped table has a Household ID, and every query on it filters by the caller's active Household (ADR-0002).
- Access rules live in the tRPC procedures, not in the UI. Hiding a button is never the only check.
- Schema changes come with a generated Drizzle migration in the same diff.
- No service beyond Postgres. A new container or hosted dependency needs an ADR first (ADR-0003, ADR-0005).`,
} satisfies SandcastleRunnerConfigInput;
