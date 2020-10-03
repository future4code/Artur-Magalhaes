import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator, AuthenticatorData } from "../services/Authenticator";

export class UserBusiness {

    constructor(
        private userDatabase: UserDatabase,
        private idGenerate: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
        ) {}

    public async signUp (dataController: any) {
        try {
            if(!dataController || !dataController.name || !dataController.email ||
               !dataController.password || !dataController.role){
                throw new Error("Invalid entry");
            }
            
            const id = this.idGenerate.generate();
            const password = await this.hashManager.hash(dataController.password);
            
            const dataBusiness = {
                id: id,
                name: dataController.name,
                email: dataController.email,
                password: password,
                role: dataController.role
            }

            await this.userDatabase.signUp(dataBusiness);
            
        } catch (error) {
            throw new Error(error.message);
        }
    }

    public async signIn (dataController: any) {
        try {
            if(!dataController || !dataController.email || !dataController.password){
                throw new Error("Invalid Email or Password");
            }

            const result = await this.userDatabase.signIn(dataController.email);
            const password = await this.hashManager.compareHash(dataController.password, result.password);
            
            if(!password) {
                throw new Error("Invalid Email or Password");
            }

            const token = this.authenticator.generateToken({
                id: result.id,
                role: result.role
            });
            
            return token;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}