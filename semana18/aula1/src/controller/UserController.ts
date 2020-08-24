import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';

export class UserController {

    public async signUp (req: Request, res: Response) {
        try {
            const userBusiness: UserBusiness = new UserBusiness();
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            const role = req.body.role;

            const token = await userBusiness.singUp(name, email, password, role);
            
            res.status(200).send({
                token
            })
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }

    public async signIn (req: Request, res: Response) {
        try{
            const userBusiness: UserBusiness = new UserBusiness();
            const email = req.body.email;
            const password = req.body.password
            const token = await userBusiness.signIn(email, password)

            res.status(200).send({
                token
            })
        } catch (error){
            res.status(400).send({
                message: error.message
            })
        }
    }

    public async getAllUsers (req: Request, res: Response) {
        try {
            const userBusiness: UserBusiness = new UserBusiness();
            const users = await userBusiness.getAllUsers(req.headers.authorization as string);
            res.status(200).send({
                users
            })
        } catch (error){
            res.status(400).send({
                message: error.message
            })
        }
    }

    public async deleteUserId (req: Request, res: Response) {
        try{
            const user: UserBusiness = new UserBusiness();
            const token = req.headers.authorization;
            const id = req.params.id;
            await user.deleteUserId(token as string, id);
            res.status(200).send({
                message: "Usuário deletado"
            })
        } catch(error) {
            res.status(401).send({
                message: error.message
            })
        }
    }
}