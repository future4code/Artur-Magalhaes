import { BaseDatabase } from "../../data/base/BaseDatabase";

export class MusicalGroupTable extends BaseDatabase{

    private static TABLE_NAME = "MusicalGroup";

    public async createTable() {
        try{
            await super.getConnection().raw(`
                CREATE TABLE IF NOT EXISTS ${MusicalGroupTable.TABLE_NAME} (
                    id VARCHAR(255) PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    category VARCHAR(255) NOT NULL,
                    responsible VARCHAR(255) NOT NULL UNIQUE
                );
            `);
        } catch(error) {
            throw new Error(error.message);
        } finally {
            await super.destroyConnection();
        }
    }
}