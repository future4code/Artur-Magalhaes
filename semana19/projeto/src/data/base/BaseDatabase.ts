import knex from 'knex';
import Knex from 'knex';

export abstract class BaseDatabase {

    private static CONNECTION: Knex | null = null
    
    protected getConnection(): Knex {
        if(!BaseDatabase.CONNECTION){
            BaseDatabase.CONNECTION = knex({
                client: 'mysql',
                connection: {
                    port: 3306,
                    host: process.env.DB_HOST,
                    database: process.env.DB_DATABASE,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD
                }
            });  
        } 
        return BaseDatabase.CONNECTION;
    }

    protected async destroyConnection () {
        if(BaseDatabase.CONNECTION !== null) {
            BaseDatabase.CONNECTION = null
        }
    }
}