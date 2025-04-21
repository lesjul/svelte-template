import { describe, test, expect } from "vitest";
import { render } from '@testing-library/svelte';
import Page from "./+page.svelte";

describe("/+page.svelte", () => {
	test("should render h1", () => {
		const { container } = render(Page);
		expect(container.querySelector("h1")).toBeTruthy();
	});
});
