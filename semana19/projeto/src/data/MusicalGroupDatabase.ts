import { BaseDatabase } from "./base/BaseDatabase";

export class MusicalGroupDatabase extends BaseDatabase{
    
    private static TABLE_NAME = "MusicalGroup";

    public async registerMusicalGroup(data: any) {
        try {
            await super.getConnection().raw(`
                INSERT INTO ${MusicalGroupDatabase.TABLE_NAME} 
                VALUES("${data.id}","${data.name}","${data.category}","${data.responsible}")
            `);
        } catch (error) {
            throw new Error(error.message);
        } finally {
            super.destroyConnection();
        }
    }

    public async detailMusicalGroup(data: string) {
        try {
            const result = await super.getConnection().raw(`
                SELECT * FROM ${MusicalGroupDatabase.TABLE_NAME}
                WHERE id = "${data}" OR name like %"${data}"%
            `);

            return result[0];
        } catch (error) {
            throw new Error (error.message);
        } finally {
            super.destroyConnection();
        }
    }

}