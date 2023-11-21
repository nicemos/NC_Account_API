import { BookingModel } from "../schemas/bookingSchema.mjs";
import { v4 as uuidv4 } from "uuid";
export const postBooking = (req, res) => {
    console.log('req.body: ', req.body);
    const booking = req.body;
    console.log('booking: ', booking);
    booking.consumers_booking_code = uuidv4();
    BookingModel.create(booking)
        .then((booking) => {
        res.status(200).send({
            success: true,
            msg: "New booking is created",
            booking_id: booking._id,
        });
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
};
export const getBookingById = (req, res) => {
    const { id } = req.params;
    BookingModel.findById(id)
        .then((booking) => {
        res.status(200).send({
            success: true,
            msg: "Matched record",
            booking,
        });
    })
        .catch((e) => {
        res.status(404).send({ msg: "Not Found" });
    });
};
export const getBookings = (req, res) => {
    BookingModel.find()
        .then((bookings) => {
        res.status(200).json({
            success: true,
            msg: "All ",
            bookings,
        });
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
};
export const updateBookingById = () => {
};
export const deleteBookingById = (req, res) => {
    const { id } = req.params;
    console.log("id: ", id);
    BookingModel.findOneAndDelete({ _id: id })
        .then((data) => {
        console.log("data: ", data);
        res.status(200).send({
            success: true,
            msg: "The booking record has been deleted",
            booking_id: data ? data._id : null,
        });
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
};
