import { Request, Response } from 'express';
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from '../data/UserDatabase';
import { IdGenerator } from '../services/IdGenerator';
import { HashManager } from '../services/HashManager';
import { Authenticator } from '../services/Authenticator';

export class UserController {

    private static userBusiness = new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
        )

    public async signUp(req: Request, res: Response) {
        try {
            const dataController = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }

            await UserController.userBusiness.signUp(dataController);

            res.status(200).send({
                message: "Created User"
            });
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }

    public async signIn(req: Request, res: Response) {
        try {
            const dataController = {
                email: req.body.email,
                password: req.body.password
            }
            const token = await UserController.userBusiness.signIn(dataController);
            
            res.status(200).send({token})
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }
}