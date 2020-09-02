import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../services/hashGenerator";

export class UserController {
  
  private static UserBusiness = new UserBusiness(
   new UserDatabase(),
   new IdGenerator(),
   new HashGenerator(),
   new TokenGenerator());

  public async signup(req: Request, res: Response) {
    try {
      const result = await UserController.UserBusiness.signup(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async login(req: Request, res: Response) {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const result = await UserController.UserBusiness.login(email, password);
      res.status(200).send(result);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  public async getUserById(req: Request, res: Response) {
    try { 
      const result = await UserController.UserBusiness.getUserById(req.params.id as string);
      res.status(200).send(result)
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  }

  public async getAllUsers(req: Request, res: Response) {
    try { 
      const result = await UserController.UserBusiness.getAllUser(req.headers.authorization as string)
      res.status(200).send(result)
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  }

  public async getProfile(req: Request, res: Response) {
    try {
      const result = await UserController.UserBusiness.getProfile(req.headers.authorization as string);
      res.status(200).send(result);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  }
}
