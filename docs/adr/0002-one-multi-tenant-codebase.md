# One multi-tenant codebase for self-hosted and hosted

A Self-hosted instance and the Hosted service run the same Docker image. Every row of family data belongs to a Household, so the app is always multi-tenant, even when a Self-hosted instance holds only one Household. Users, sessions and the instance settings row are the exceptions: they belong to the running copy of the app, not to any Household. Billing code exists in the image but stays off unless an environment variable turns it on. Only the Hosted service sets it.

We rejected a single-tenant self-host build. Two builds would drift, and every feature would need testing twice.
