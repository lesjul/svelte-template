import { Seed, users } from "@better-auth-kit/seed";

export const seed = Seed({
	// Adds 100 users (including sessions and accounts)
	...users(),
});
