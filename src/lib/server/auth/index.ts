import dotenv from "dotenv";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { v7 as uuidv7 } from "uuid";
import { db } from "$lib/server/drizzle";
import { whatevers } from "$lib/server/db";
import { argon2Hash, argon2Verify } from "$lib/server/auth/password";

dotenv.config();

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		usePlural: true,
		schema: {
			whatevers,
		},
	}),
	secret: process.env.BETTER_AUTH_SECRET,
	plugins: [],
	emailAndPassword: {
		enabled: true,
		password: {
			hash: argon2Hash,
			verify: argon2Verify,
		},
	},
	advanced: {
		database: {
			generateId: () => uuidv7(),
		},
		cookiePrefix: "app",
	}
});
