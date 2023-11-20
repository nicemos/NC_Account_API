import { ConsumerModel } from "../schemas/consumerSchema.mjs";
import { v4 as uuidv4 } from "uuid";
export const postConsumer = (req, res) => {
    let { consumer } = req.body;
    consumer.consumers_consumer_code = uuidv4();
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
export const getConsumers = (req, res) => {
    ConsumerModel.find()
        .populate("consumers_booking_code", "consumers_booking_code")
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
export const deleteConsumerById = (req, res) => {
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
