import { Router } from "express";
import { postConsumer, 
// getConsumerById,
getConsumers, 
// updateConsumerById,
deleteConsumerById, } from '../controllers/consumer.controller.mjs';
const consumersRouter = Router();
consumersRouter.post("/", postConsumer);
// consumersRouter.get("/:id", getConsumerById);
consumersRouter.get('/', getConsumers);
// consumersRouter.patch("/:consumer_id", updateConsumerById);
consumersRouter.delete("/:id", deleteConsumerById);
export { consumersRouter };
