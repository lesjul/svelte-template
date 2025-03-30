import { eq } from "drizzle-orm";
import { type NodePgClient, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { usersTable } from "../db/schema";

export class ExempleRepository {
	private _db: NodePgDatabase<Record<string, never>> & { $client: NodePgClient };

	constructor(db: NodePgDatabase<Record<string, never>> & { $client: NodePgClient }) {
		this._db = db;
	}

	public async fetchById(id: string): Promise<void> {
		await this._db
			.select()
			.from(usersTable)
			.where(eq(usersTable.id, parseInt(id)))
			.orderBy(usersTable.id);
	}
}
