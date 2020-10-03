import express from 'express';
import { ShowController } from '../controller/ShowController';

export const showRouter = express.Router();

showRouter.post("/addshow", new ShowController().addShow);
showRouter.get("/", new ShowController().shows);