import { Router } from "express";
export const consumersRouter = Router();
consumersRouter.get('/', () => 'Hello from consumersRouter');
