import { Router } from "express";

export const providersRouter:Router = Router();

providersRouter.get('/', ()=>'Hello from providersRouter');