import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { ShowModel } from "../model/Show/ShowModel";

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
            
            if(dataController.week_day !== "SEXTA" && dataController.week_day !== "SÁBADO" && dataController.week_day !== "DOMINGO"){
                throw new Error("Invalid Day");
            }

            const id = this.idGenerate.generate();

            const dataBusiness: ShowModel = {
                id: id,
                week_day: dataController.week_day,
                start: Number(dataController.start),
                end: Number(dataController.end),
                band_id: dataController.band_id
            }

            const result = await this.showDatabase.getShows(dataController.week_day);
            
            if(result[0].start === Number(dataController.start) && result.length > 0) {
                throw new Error("Time Unavailable");
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