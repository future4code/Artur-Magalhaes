import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {

    private userDatabase: UserDatabase = new UserDatabase();
    private authenticator: Authenticator = new Authenticator();
    private hashManager: HashManager = new HashManager();

    public async singUp (name: string, email: string, password: string, role: string): Promise<string> {
        try {
            const isPassword = await this.hashManager.hash(password);
            const token = await this.userDatabase.signUp(name, email, isPassword, role);

            return token;
        } catch (error) {
            throw new Error (error.message)
        }
    }

    public async signIn (email: string, password: string): Promise<string> {
        try {
            const user = await this.userDatabase.signIn(email);
            const resultPassword = this.hashManager.compare(password, user[0][0].password)
            if(!resultPassword){
                throw new Error ("Invalid email or password");
            }

            const token = await this.authenticator.generateToken({
                id: user[0][0].id,
                role: user[0][0].role 
            }, process.env.JWT_EXPIRES_IN);

            return token;
        } catch (error) {
            throw new Error (error.message);
        }
    }

    public async getAllUsers (token: string): Promise<any> {
        try {
            if (!token){
                throw new Error ("Invalid Token")
            }
            
            const users = await this.userDatabase.getAllUsers();
            
            return users[0];
        } catch (error) {
            throw new Error (error.message)
        }
    }

    public async deleteUserId (token: string, id: string): Promise<void> {
        try {
            const dataToken = await this.authenticator.getData(token);
            if (dataToken.role !== 'ADMIN') {
                throw new Error ("Unauthorization")
            }
            await this.userDatabase.deleteUserId(id);
            
        } catch (error) {
            throw new Error (error.message)
        }
    }
}