import { pgTable, serial, integer } from "drizzle-orm/pg-core";

export const usersTable = pgTable("user", {
	id: serial("id").primaryKey(),
	age: integer("age"),
});
