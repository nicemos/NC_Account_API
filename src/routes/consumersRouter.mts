import { Router } from "express";

export const consumersRouter:Router = Router();

consumersRouter.get('/', ()=>'Hello from consumersRouter');