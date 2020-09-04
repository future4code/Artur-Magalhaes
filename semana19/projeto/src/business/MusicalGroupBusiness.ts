import { MusicalGroupDatabase } from "../data/MusicalGroupDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class MusicalGroupBusiness {
    
    constructor(
        private musicalDatabase: MusicalGroupDatabase,
        private authenticator: Authenticator,
        private idGenerate: IdGenerator,
    ){}

    public async registerMusicalGroup(dataController: any) {
        try {
            if(!dataController || !dataController.name|| 
               !dataController.category || !dataController.responsible || !dataController.token) {
                throw new Error("Invalid Data");
            }

            const dataToken = this.authenticator.verify(dataController.token);

            if(dataToken.role !== "admin"){
                throw new Error("Unauthorization");
            }

            const id = this.idGenerate.generate();
            const dataBusiness = {
                id: id,
                name: dataController.name,
                category: dataController.category,
                responsible: dataController.responsible
            }

            await this.musicalDatabase.registerMusicalGroup(dataBusiness);
            
        } catch (error) {
            throw new Error(error.message);
        }
    }
}