import { Router } from "express";

export const servicesRouter:Router = Router();

servicesRouter.get('/', ()=>'Hello from servicesRouter');