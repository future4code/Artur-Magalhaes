import { Request, Response } from 'express';
import { MusicalGroupBusiness } from "../business/MusicalGroupBusiness";
import { MusicalGroupDatabase } from "../data/MusicalGroupDatabase";
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';

export class MusicalGroupController {

    private static musicalGrupBusiness = new MusicalGroupBusiness(
        new MusicalGroupDatabase(),
        new Authenticator(),
        new IdGenerator(),
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

    public async detailMusicalGroup(req: Request, res: Response) {
        try {
            const result = await MusicalGroupController.musicalGrupBusiness.detailMusicalGroup(req.body.data);

            res.status(200).send({
                result
            });
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    }
}