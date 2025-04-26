import { v4 as uuidv4 } from "uuid";

/**
 * Formats a key by converting it to lowercase, replacing spaces with dashes,
 * stripping special characters, and adding a UUID to the end.
 * (To prevent svelte/require-each-key eslint error)
 *
 * @param key - The key to format (string or number).
 * @returns The formatted key as a string.
 */
export const eachKey = (key: string | number): string => {
	const finalKey: string = typeof key === "string" ? key : key.toString();
	const formattedKey: string = finalKey
		.replace(/[^a-zA-Z0-9\\s]/g, "")
		.replace(/ /g, "-")
		.toLowerCase();
	return `${formattedKey}-${uuidv4()}`;
};
