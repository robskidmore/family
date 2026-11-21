# Background jobs in pg-boss, run by a worker from the same image

Reminders, push notifications and recurring Chores run as jobs in pg-boss, a queue stored in Postgres. A worker process starts from the same Docker image as the app, with a different command. Docker Compose runs three services: app, worker and Postgres. We rejected Redis-based queues such as BullMQ because they add a container to every Self-hosted instance.
