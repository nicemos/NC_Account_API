import { ConsumerModel } from "../schemas/consumerSchema.mjs";
export const postConsumer = (req, res) => {
    let consumer = Object.assign({}, req.body);
    ConsumerModel.create(consumer)
        .then((consumer) => {
        res.status(200).send({
            success: true,
            message: "New consumer is created",
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
            message: "The consumer has been deleted",
            consumer_id: data ? data._id : null
        });
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
};
