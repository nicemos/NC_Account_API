import { Request, Response } from "express";
import { ConsumerModel } from "../schemas/consumerSchema.mjs";

export const postConsumer = (req: Request, res: Response) => {
  let consumer = {...req.body};
  ConsumerModel.create(consumer)
    .then((consumer) => {
      res.status(200).send({
        success: true,
        msg: "New consumer is created",
        consumer_id: consumer._id,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};

export const getConsumers = (req: Request, res: Response) => {
  ConsumerModel.find()
    .populate("consumers_booking_code")
    .populate("consumers_key", "consumers_key")
    .exec()
    .then((consumers) => {
      res.status(200).json({ consumers });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};


export const deleteConsumerById = (req: Request, res: Response) => {
    const { id } = req.params;
    ConsumerModel.findOneAndDelete({ _id: id })
      .then((data) => {
        res.status(200).send({
            success: true,
            msg: "The consumer has been deleted",
            consumer_id: data ? data._id : null
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  };
  