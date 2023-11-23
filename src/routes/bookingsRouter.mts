import { Router } from "express";
import {
    postBooking,
    getBookingById,
    getBookings,
    updateBookingById,
    deleteBookingById,
    getCompleteBookingByBookingRef
} from '../controllers/booking.controller.mjs';

const bookingsRouter:Router = Router();

bookingsRouter.post("/", postBooking);
bookingsRouter.get("/:id", getBookingById);
bookingsRouter.get('/', getBookings);
bookingsRouter.get("/selected/:refId", getCompleteBookingByBookingRef);
bookingsRouter.patch("/:booking_id", updateBookingById);
bookingsRouter.delete("/:id", deleteBookingById);

export { bookingsRouter };