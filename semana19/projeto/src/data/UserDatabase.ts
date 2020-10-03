import { BaseDatabase } from "./base/BaseDatabase";
import { SignUp } from "../model/User/input/SignUp";
import { SignIn } from "../model/User/output/SignIn";

export class UserDatabase extends BaseDatabase {

    private static TABLE_NAME = "Users";

    public async signUp(data: SignUp): Promise<void> {
        try {
            await super.getConnection().raw(`
                INSERT INTO ${UserDatabase.TABLE_NAME} 
                VALUES ("${data.id}","${data.name}","${data.password}","${data.email}","${data.role}")
            `);
        } catch (error) {
            throw new Error (error.message);
        } finally {
            await super.destroyConnection();
        }
    }

    public async signIn(email: string): Promise<SignIn> {
        try {
            const result = await super.getConnection().raw(`
                SELECT id, role, password FROM ${UserDatabase.TABLE_NAME}
                WHERE email = "${email}"
            `);

            return result[0][0];
        } catch (error) {
            throw new Error (error.message);
        } finally {
            super.destroyConnection();
        }
    }

}