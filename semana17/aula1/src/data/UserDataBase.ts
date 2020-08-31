import knex from 'knex';

export class UserDataBase {
    private connection = knex({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT || "3306"),
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        }
    });

    private static TABLE_NAME = "Users";

    public async createUsers(
        id: string, 
        name: string,
        nickname: string,
        password: string,
        email: string): Promise<void> {
            await this.connection.raw(`
                INSERT INTO ${UserDataBase.TABLE_NAME} 
                VALUES ("${id}",
                        "${name}",
                        "${nickname}",
                        "${password}",
                        "${email}");
            `)
    }

    public async signIn (
        email: string,
        password: string,
    ): Promise<any> {
        const result = await this.connection.raw(`
            SELECT * FROM ${UserDataBase.TABLE_NAME} 
            WHERE email = '${email}' AND password = '${password}';
        `)
        return result[0]
    }

    public async getUsers (id: string) {
        try{
            const result = await this.connection.raw(`
                SELECT * FROM ${UserDataBase.TABLE_NAME}
                WHERE id = '${id}';
                `);
            return result[0];
        } catch(error) {
            console.log(error);
        }
    }
}