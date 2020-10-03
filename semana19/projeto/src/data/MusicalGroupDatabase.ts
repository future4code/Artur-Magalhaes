import { BaseDatabase } from "./base/BaseDatabase";
import { MusicalGroupModel } from "../model/MusicalGroup/MusicalGroupModel";

export class MusicalGroupDatabase extends BaseDatabase{
    
    private static TABLE_NAME = "MusicalGroup";

    public async registerMusicalGroup(data: MusicalGroupModel): Promise<void> {
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

    public async detailMusicalGroup(data: string): Promise<MusicalGroupModel> {
        try {
            const result = await super.getConnection().raw(`
                SELECT * FROM ${MusicalGroupDatabase.TABLE_NAME}
                WHERE id LIKE "%${data}%" OR name LIKE "%${data}%"
            `);

            return result[0];
        } catch (error) {
            throw new Error (error.message);
        } finally {
            super.destroyConnection();
        }
    }

}