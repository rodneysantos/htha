CREATE TABLE "properties" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"address" text NOT NULL,
	"suburb" text NOT NULL,
	"description" text NOT NULL,
	"sale_price" numeric(10, 2) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "properties_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE INDEX "suburb_idx" ON "properties" USING btree ("suburb");--> statement-breakpoint
CREATE INDEX "sale_price_idx" ON "properties" USING btree ("sale_price");