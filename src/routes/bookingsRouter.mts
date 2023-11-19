import { Router } from "express";

export const bookingsRouter:Router = Router();

// bookingsRouter.post()


bookingsRouter.get('/', (_, res) => {
    res.status(404).send({ success: true, msg: "Hello from Bookings" });
});