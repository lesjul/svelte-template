import { eq } from "drizzle-orm";
import { type NodePgClient, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { whatevers as whateversTable } from "../db/app-schema";

export class ExempleRepository {
	private _db: NodePgDatabase<Record<string, never>> & { $client: NodePgClient };

	constructor(db: NodePgDatabase<Record<string, never>> & { $client: NodePgClient }) {
		this._db = db;
	}

	public async fetchById(id: string): Promise<void> {
		await this._db
			.select()
			.from(whateversTable)
			.where(eq(whateversTable.id, id))
			.orderBy(whateversTable.id);
	}
}
