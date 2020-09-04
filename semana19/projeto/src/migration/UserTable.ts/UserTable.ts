import { BaseDatabase } from "../../data/base/BaseDatabase";

export class UserTable extends BaseDatabase{

    private static TABLE_NAME = "Users";

    public async createTable() {
        try{
            await super.getConnection().raw(`
                CREATE TABLE IF NOT EXISTS ${UserTable.TABLE_NAME} (
                    id VARCHAR(255) PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL UNIQUE,
                    password VARCHAR(255) NOT NULL,
                    role VARCHAR(255) NOT NULL DEFAULT "normal"
                );
            `);
        } catch(error) {
            throw new Error(error.message);
        } finally {
            await super.destroyConnection();
        }
    }
}