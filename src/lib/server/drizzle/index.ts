import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

dotenv.config();

export const db = drizzle({
	casing: "snake_case",
	connection: {
		connectionString: process.env.DATABASE_URL,
		ssl: false,
	},
});
