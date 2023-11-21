import { ProviderModel } from "../schemas/providerSchema.mjs";
export const postProvider = (req, res) => {
    let provider = Object.assign({}, req.body);
    ProviderModel.create(provider)
        .then((provider) => {
        res.status(200).send({
            success: true,
            msg: "New provider is created",
            provider_id: provider._id,
        });
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
};
export const getProviders = (req, res) => {
    ProviderModel.find()
        .then((providers) => {
        res.status(200).json({ providers });
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
};
export const deleteProviderById = (req, res) => {
    const { id } = req.params;
    ProviderModel.findOneAndDelete({ _id: id })
        .then((data) => {
        res.status(200).send({
            success: true,
            msg: "The provider has been deleted",
            provider_id: data ? data._id : null
        });
    })
        .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
};
