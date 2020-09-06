import { BaseDatabase } from "./BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "User_Arq";
  private idGenerator = new IdGenerator();
  private authenticator = new Authenticator();

  public async signUp (name: string, email: string, password: string, role: string): Promise<string> {
    try {
      const id = this.idGenerator.generate();
      await super.getConnection().raw(`
        INSERT INTO ${UserDatabase.TABLE_NAME} VALUES ("${id}", "${name}", "${email}", "${password}", "${role}")
      `);

      const token = this.authenticator.generateToken({id, role}, process.env.JWT_EXPIRES_IN);
      
      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  public async signIn (email: string): Promise<any> {
    try {
      const user = await super.getConnection().raw(`
        SELECT * FROM ${UserDatabase.TABLE_NAME} 
        WHERE email = "${email}";
      `);

      return user;
    } catch (error) {
      throw new Error (error.message)
    }
  }

  public async getAllUsers (): Promise<any> {
    try {
      const users = await super.getConnection().raw(`
        SELECT * FROM ${UserDatabase.TABLE_NAME}
      `);

      return users;
    } catch (error) {
      throw new Error (error.message)
    }
  }

  public async deleteUserId (id: string): Promise<void> {
    try {
      await super.getConnection()
            .delete()
            .from(UserDatabase.TABLE_NAME)
            .where({id});
    } catch (error) {
      throw new Error (error.message)
    }
  }

}
