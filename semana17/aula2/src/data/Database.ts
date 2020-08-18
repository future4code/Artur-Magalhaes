import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config()

export default abstract class Database {
    private static CONNECTION: knex | null = null;

    public getConnection() {
        if(!Database.CONNECTION){
            Database.CONNECTION = knex({
                client: 'mysql',
                connection: {
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT || "3306"),
                    user: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME
                }
                });
        }
        return Database.CONNECTION;
    }


}