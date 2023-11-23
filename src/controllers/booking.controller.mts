import { Request, Response } from "express";
import { BookingModel } from "../schemas/bookingSchema.mjs";
import generateUniqueId from "generate-unique-id";

export const postBooking = (req: Request, res: Response) => {
  const booking = {...req.body};
  booking.consumers_booking_code = +generateUniqueId({
    length: 8,
    useLetters: false,
    // includeSymbols: ["@", "#", "|"],
    // excludeSymbols: ["0"],
  });
  BookingModel.create(booking)
    .then((booking) => {
      res.status(200).send({
        success: true,
        message: "New booking is created",
        booking_id: booking._id,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

export const getBookingById = (req: Request, res: Response) => {
  const { id } = req.params;
  BookingModel.findById(id)
    .then((booking) => {
      res.status(200).send({
        success: true,
        message: "Matched record",
        booking,
      });
    })
    .catch((e) => {
      res.status(404).send({ message: "Not Found" });
    });
};

export const getBookings = (req: Request, res: Response) => {
  BookingModel.find()
    .then((bookings) => {
      res.status(200).json({
        success: true,
        message: "All ",
        bookings,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};
export const getCompleteBookingByBookingRef = (req: Request, res: Response) => {
 
}

export const updateBookingById = () => {};

export const deleteBookingById = (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("id: ", id);
  BookingModel.findOneAndDelete({ _id: id })
    .then((data) => {
      console.log("data: ", data);
      res.status(200).send({
        success: true,
        message: "The booking record has been deleted",
        booking_id: data ? data._id : null,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};
