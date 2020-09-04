import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {
    
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerate: IdGenerator
    ){}

    public async addShow(dataController: any) {
        try {
            if(!dataController){
                throw new Error("Invalid Entry");
            }
            
            const id = this.idGenerate.generate();

            const dataBusiness = {
                id: id,
                week_day: dataController.week_day,
                start: dataController.start,
                end: dataController.end,
                band_id: dataController.band_id
            }

            await this.showDatabase.addShow(dataBusiness);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    public async shows(date: any) {
        try {
            if(!date) {
                throw new Error("Invalid Date");
            }

            return await this.showDatabase.shows(date);
        } catch (error) {
            throw new Error(error.message);
        }
    }

}