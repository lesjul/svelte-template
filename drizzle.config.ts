import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

export default defineConfig({
	dialect: "postgresql",
	schema: "./src/lib/server/db",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
	verbose: true,
	strict: true,
});
