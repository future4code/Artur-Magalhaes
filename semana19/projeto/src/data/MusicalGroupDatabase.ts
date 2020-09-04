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



}