import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { v7 as uuidv7 } from "uuid";

export const whatevers = pgTable("whatevers", {
	id: text("id")
		.$defaultFn(() => uuidv7())
		.primaryKey(),
	username: text("email").notNull().unique(),
	createdAt: timestamp("created_at", { withTimezone: true }).notNull(),
});
