import { ServiceModel } from "../schemas/serviceSchema.mjs";
export const postService = (req, res) => {
    let service = Object.assign({}, req.body);
    ServiceModel.create(service)
        .then((service) => {
        res.status(200).send({
            success: true,
            message: "New service is created",
            service_id: service._id,
        });
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
};
export const getServices = (req, res) => {
    ServiceModel.find()
        .then((services) => {
        res.status(200).json({ services });
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
};
export const deleteServiceById = (req, res) => {
    const { id } = req.params;
    ServiceModel.findOneAndDelete({ _id: id })
        .then((data) => {
        res.status(200).send({
            success: true,
            message: "The service has been deleted",
            service_id: data ? data._id : null
        });
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
};
