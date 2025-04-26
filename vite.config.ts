import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import TurboConsole from "unplugin-turbo-console/vite";
import tailwindcss from "@tailwindcss/vite";
import stripComments from "vite-plugin-strip-comments";
import removeConsole from "vite-plugin-remove-console";

export default defineConfig({
	plugins: [
		TurboConsole(),
		tailwindcss(),
		sveltekit(),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/lib/common/paraglide",
		}),
		stripComments({ type: "none" }),
		removeConsole(),
	],
	test: {
		workspace: [
			{
				extends: "./vite.config.ts",
				plugins: [svelteTesting()],
				test: {
					name: "client",
					environment: "happy-dom",
					clearMocks: true,
					include: ["src/**/*.test.{js,ts}", "src/**/*.svelte.test.{js,ts}"],
					exclude: ["src/lib/server/**"],
					setupFiles: ["./vitest-setup-client.ts"],
				},
			},
			{
				extends: "./vite.config.ts",
				test: {
					name: "server",
					environment: "node",
					include: ["src/**/*.{test,spec}.{js,ts}"],
					exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"],
				},
			},
		],
	},
});
