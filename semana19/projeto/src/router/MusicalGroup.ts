import express from 'express';
import { MusicalGroupController } from '../controller/MusicalGroupController';

export const musicalGroupRouter = express.Router();

musicalGroupRouter.post("/created", new MusicalGroupController().registerMusicalGroup);
musicalGroupRouter.get("/", new MusicalGroupController().detailMusicalGroup);