import Database from "./Database";

export class UserDB extends Database{
    private static TABLE_NAME = "Users";

    public async createUsers(
        id: string, 
        name: string,
        nickname: string,
        password: string,
        email: string,
        role: string): Promise<void> {
            await this.getConnection().raw(`
                INSERT INTO ${UserDB.TABLE_NAME} 
                VALUES ("${id}",
                        "${name}",
                        "${nickname}",
                        "${password}",
                        "${email}",
                        "${role}");
            `)
    }

    public async signIn (
        email: string,
    ): Promise<any> {
        const result = await this.getConnection().raw(`
            SELECT * FROM ${UserDB.TABLE_NAME} 
            WHERE email = '${email}';
        `)
        return result[0]
    }

    public async getUsers (): Promise<any> {
        const result = await this.getConnection().raw(`
            SELECT name, nickname, email FROM ${UserDB.TABLE_NAME} 
        `)
        return result[0]
    }

    public async delete (id: string): Promise<void> {
        await this.getConnection().raw(`
            DELETE FROM ${UserDB.TABLE_NAME} 
            WHERE id = "${id}"
        `)
    } 

    public async getUserId (id: string): Promise<any> {
        const result = await this.getConnection().raw(`
            SELECT id, email FROM ${UserDB.TABLE_NAME} 
            WHERE id = "${id}"
        `);
        return result[0];
    }
}