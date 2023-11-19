import { Router } from "express";
export const servicesRouter = Router();
servicesRouter.get('/', () => 'Hello from servicesRouter');
