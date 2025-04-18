import { deLocalizeUrl } from "$lib/common/paraglide/runtime";

export const reroute = (request) => deLocalizeUrl(request.url).pathname;
