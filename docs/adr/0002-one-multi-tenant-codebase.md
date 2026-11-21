# One multi-tenant codebase for self-hosted and hosted

A Self-hosted instance and the Hosted service run the same Docker image. Every row belongs to a Household, so the app is always multi-tenant, even when a Self-hosted instance holds only one Household. Billing code exists in the image but stays off unless an environment variable turns it on. Only the Hosted service sets it.

We rejected a single-tenant self-host build. Two builds would drift, and every feature would need testing twice.
