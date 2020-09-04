import { Request, Response } from 'express';
import { MusicalGroupBusiness } from "../business/MusicalGroupBusiness";
import { MusicalGroupDatabase } from "../data/MusicalGroupDatabase";

export class MusicalGroupController {

    private static musicalGrupBusiness = new MusicalGroupBusiness(
        new MusicalGroupDatabase()
    );

    public async registerMusicalGroup(req: Request, res: Response) {
        try {
            const dataController = {
                name: req.body.name,
                category: req.body.category,
                responsible: req.body.responsible,
                token: req.headers.authorization
            }

            await MusicalGroupController.musicalGrupBusiness.registerMusicalGroup(dataController);

            res.status(200).send({
                message: "Created Musical Group"
            })
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }
}