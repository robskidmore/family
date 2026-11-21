CREATE TABLE "instance_settings" (
	"id" text PRIMARY KEY DEFAULT 'instance' NOT NULL,
	"vapid_public_key" text,
	"vapid_private_key" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
