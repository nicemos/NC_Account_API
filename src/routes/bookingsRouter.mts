import { Router } from "express";
import {
    postBooking,
    getBookingById,
    getBookings,
    updateBookingById,
    deleteBookingById
} from '../controllers/booking.controller.mjs';

const bookingsRouter:Router = Router();

bookingsRouter.post("/", postBooking);
bookingsRouter.get("/:id", getBookingById);
bookingsRouter.get('/', getBookings);
bookingsRouter.patch("/:booking_id", updateBookingById);
bookingsRouter.delete("/:id", deleteBookingById);

export { bookingsRouter };