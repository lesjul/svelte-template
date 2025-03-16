import dotenv from "dotenv";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { v7 as uuidv7 } from "uuid";
import argon2 from "argon2";
import { db } from "$lib/server/drizzle";
import { user } from "$lib/server/db";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		usePlural: true,
		schema: {
			user,
		},
	}),
	secret: process.env.BETTER_AUTH_SECRET,
	plugins: [],
	emailAndPassword: {
		enabled: true,
		// password: {
		// 	hash: argon2.hash,
		// 	verify: argon2Verify,
		// },
	},
	advanced: {
		generateId: () => uuidv7(),
		// cookiePrefix: "app",
	},
	user: {
		modelName: "customers",
	},
});
