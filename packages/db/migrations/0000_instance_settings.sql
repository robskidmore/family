CREATE TABLE "instance_settings" (
	"id" text PRIMARY KEY DEFAULT 'instance' NOT NULL,
	"vapid_public_key" text,
	"vapid_private_key" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "instance_settings_single_row" CHECK ("instance_settings"."id" = 'instance'),
	CONSTRAINT "instance_settings_vapid_pair" CHECK (("instance_settings"."vapid_public_key" is null) = ("instance_settings"."vapid_private_key" is null))
);
