import express from 'express';
import { ShowController } from '../controller/ShowController';

const showRouter = express.Router();

showRouter.post("/addshow", new ShowController().addShow);