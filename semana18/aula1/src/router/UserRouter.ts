import express from 'express';
import { UserController } from '../controller/UserController';

export const userRouter = express.Router();

userRouter.post("/signup", new UserController().signUp);

userRouter.post("/signin", new UserController().signIn);

userRouter.get("/all", new UserController().getAllUsers);

userRouter.delete("/:id", new UserController().deleteUserId);