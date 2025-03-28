import { sequence } from "@sveltejs/kit/hooks";
import { type Handle } from "@sveltejs/kit";
import { paraglideMiddleware } from "$lib/common/paraglide/server";
import { svelteKitHandler } from "better-auth/svelte-kit";
import { auth } from "$lib/server/auth";

const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ locale }) => {
		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace("%lang%", locale),
		});
	});

const handleParaglide: Handle = paraglideHandle;

const handleBetterAuth: Handle = async ({ event, resolve }) => {
	return svelteKitHandler({ event, resolve, auth });
};

export const handle = sequence(handleParaglide, handleBetterAuth);
