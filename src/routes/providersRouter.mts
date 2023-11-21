import { Router } from "express";
import { deleteProviderById, getProviders, postProvider } from "../controllers/provider.controller.mjs";

export const providersRouter:Router = Router();

providersRouter.post("/", postProvider);
providersRouter.get('/', getProviders);
providersRouter.delete("/:id", deleteProviderById);