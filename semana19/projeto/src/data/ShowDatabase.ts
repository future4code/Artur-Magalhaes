import { BaseDatabase } from "./base/BaseDatabase";

export class ShowDatabase extends BaseDatabase {
    
    private static TABLE_NAME = "Show";

    public async addShow(data: any) {
        try {
            await super.getConnection().raw(`
                INSERT INTO ${ShowDatabase.TABLE_NAME}
                VALUES ("${data.id}","${data.week_day}","${data.start}","${data.end}","${data.band_id}")
            `);
        } catch (error) {
            throw new Error(error.message);
        } finally {
            await super.destroyConnection();
        }
    }
}