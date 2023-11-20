import { Request, Response } from "express";
import { BookingModel } from "../schemas/bookingSchema.mjs";
import { v4 as uuidv4 } from "uuid";

export const postBooking = (req: Request, res: Response) => {
  let { booking } = req.body;
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

export const getBookingById = () => {
  return;
};

export const getBookings = (req: Request, res: Response) => {
  BookingModel.find()
    .then((bookings) => {
      res.status(200).json({ bookings });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

export const updateBookingById = () => {
  return;
};

export const deleteBookingById = (req: Request, res: Response) => {
  const {id} = req.params;
  console.log('id: ', id);
  BookingModel.findOneAndDelete({ _id: id })
  .then((data) => {
    console.log('data: ', data);
    res.status(200).send({
        success: true,
        msg: "The booking record has been deleted",
        booking_id: data ? data._id : null
      });
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(400);
  });
};
