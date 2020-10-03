import { BaseDatabase } from "../../data/base/BaseDatabase";

export class ShowTable extends BaseDatabase{

    private static TABLE_NAME = "Shows";

    public async createTable() {
        try{
            await super.getConnection().raw(`
                CREATE TABLE IF NOT EXISTS ${ShowTable.TABLE_NAME} (
                    id VARCHAR(255) PRIMARY KEY,
                    weekday VARCHAR(255) NOT NULL,
                    start INT NOT NULL,
                    end INT NOT NULL,
                    band_id VARCHAR(255) NOT NULL,
                    FOREIGN KEY (band_id) REFERENCES MusicalGroup(id)
                )
            `);
        } catch(error) {
            throw new Error(error.message);
        } finally {
            await super.destroyConnection();
        }
    }
}