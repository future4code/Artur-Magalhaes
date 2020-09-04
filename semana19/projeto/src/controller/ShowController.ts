import { Request, Response } from 'express';
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from '../services/IdGenerator';

export class ShowController {

    private static showBusiness = new ShowBusiness(
        new ShowDatabase(),
        new IdGenerator(),
    );

    public async addShow(req: Request, res: Response){
        try{
            const dataController = {
                week_day: req.body.week_day,
                start: req.body.start,
                end: req.body.end,
                band_id: req.body.band_id
            }

            await ShowController.showBusiness.addShow(dataController);

            res.status(200).send({
                message: "Created Show"
            })
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    }

    public async shows(req: Request, res: Response) {
        try {
            const result = await ShowController.showBusiness.shows(req.body.date);

            res.status(200).send({
                result
            })
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }

}