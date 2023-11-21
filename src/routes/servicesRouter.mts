import { Router } from "express";
import { deleteServiceById, getServices, postService } from "../controllers/service.controller.mjs";

export const servicesRouter:Router = Router();

servicesRouter.post("/", postService);
servicesRouter.get('/', getServices);
servicesRouter.delete("/:id", deleteServiceById);