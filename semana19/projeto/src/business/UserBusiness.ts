import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";

export class UserBusiness {

    constructor(private userDatabase: UserDatabase) {

    }

    public async signUp (dataController: any) {
        try {
            if(!dataController || !dataController.name || !dataController.email ||
               !dataController.password || !dataController.role){
                throw new Error("Invalid entry");
            }
            
            const id = new IdGenerator().generate();
            const password = await new HashManager().hash(dataController.password);
            
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
}