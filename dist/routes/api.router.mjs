import { Router } from "express";
import { bookingsRouter } from "./bookingsRouter.mjs";
import { consumersRouter } from "./consumersRouter.mjs";
import { providersRouter } from "./providersRouter.mjs";
import { servicesRouter } from "./servicesRouter.mjs";
export const apiRouter = Router();
console.log('inside apiRouter');
apiRouter.use("/bookings", bookingsRouter);
apiRouter.use("/consumers", consumersRouter);
apiRouter.use("/providers", providersRouter);
apiRouter.use("/services", servicesRouter);
apiRouter.get("/", (_, res) => {
    res.status(200).send({ success: true, message: "Endpoints List: " });
});
