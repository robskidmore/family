# Planning

The roadmap lives on the [Family — Efforts](https://github.com/users/robskidmore/projects/2) board. It's public, so self-hosters can see what's coming.

## Efforts

An Effort is one feature on the roadmap, such as Calendar or Lists. Each one has a tracking issue titled `Effort: <name>` with the `effort` label. Any issue with that label joins the board on its own.

The Effort issue doesn't hold the work. Specs hang under it as sub-issues, and each Spec's tickets hang under the Spec. The board's Sub-issues progress column counts them, so a closed ticket moves the bar.

An Effort issue body has these lines:

- A short summary of the feature.
- **Anchor**: the Spec that defines it, or "none yet" before one exists.
- **Frontier**: the next ticket that can start, once tickets exist.
- **Depends on**: Efforts that have to land first.
- **Decided in**: the ADRs, grills or issues behind it.

A new feature gets a new Effort before it gets a Spec. A feature too big for one Spec gets several Specs under one Effort.

## Fields

**Status** tracks the Effort as a whole.

| Status | Meaning |
|---|---|
| Idea | On the roadmap. No one has worked on it. |
| Backlog | Committed to, but not started. |
| Product Planning | Writing or grilling the Spec. |
| Technical Planning | Settling the design and any ADRs. |
| Writing Plan | Slicing the Spec into tickets. |
| Ready for Agent | Tickets carry `ready-for-agent`, and sandcastle can pick them up. |
| Testing | Tickets merged. Checking it in the real app. |
| Done | Shipped. Closing the Effort issue sets this. |
| Blocked | Waiting on another Effort or on a person. |

Status is set by hand, with one exception: closing an Effort sets it to Done. Ticket labels don't move it. When sandcastle marks a ticket `needs-human`, check whether the Effort should go to Blocked.

**Launch** is the first release that needs the Effort.

- **Self-host v1** is the first public Docker image a self-hoster can run for real.
- **Hosted launch** is when the Hosted service opens. It needs Self-host v1 plus billing and ops.
- **Later** is anything after those two.

**Area** groups Efforts by module: Platform, Household, Calendar, Lists, Chores, Kiosk, Notifications and Hosted service. Platform covers the image, Compose, CI and the worker. Household covers sign-in, Members, invites and Claims.

**Size** is a rough guess, S, M or L, at how many Specs and tickets the Effort will take. Fix it when the Spec lands.

## Views

- **Roadmap** groups Efforts by Launch, furthest along first. Expand an Effort to see its Specs.
- **Board** has one column per Status.
- **By Area** groups Efforts by Area.

All three views filter to `label:effort`. Specs and tickets join the project as sub-issues of an Effort, so they show up nested under it, not as rows of their own.

## Automations

- An issue with the `effort` label joins the board.
- Sub-issues of an item on the board join it too.
- Closing an item sets its Status to Done.

Done Efforts aren't archived. They stay on the board as a record of what shipped.
