import { type PageServerLoad } from "../example/$types";
import { error } from "@sveltejs/kit";
import { db } from "$lib/server/drizzle";
import { ExempleRepository } from "$lib/server/repositories";

const exampleRepo = new ExempleRepository(db);

export const load: PageServerLoad = async () => {
	const [exampleData] = await Promise.allSettled([
		await exampleRepo.fetchById("0195e09e-913f-7f90-a5e1-81f2d89c7caf"),
	]);

	if (exampleData.status === "rejected") {
		error(500, { message: "500 Internal Server Error" });
	}

	return {
		value: exampleData.value,
	};
};
