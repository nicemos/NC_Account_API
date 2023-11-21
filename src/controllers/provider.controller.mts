import { Request, Response } from "express";
import { ProviderModel } from "../schemas/providerSchema.mjs";
import generateUniqueId from 'generate-unique-id';

export const postProvider = (req: Request, res: Response) => {
  let provider = {...req.body};
  provider.providers_booking_code = +generateUniqueId({
    length: 8,
    useLetters: false,
    // includeSymbols: ["@", "#", "|"],
    // excludeSymbols: ["0"],
  });
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

export const getProviders = (req: Request, res: Response) => {
  ProviderModel.find()
    .populate("providers_booking_code", "providers_booking_code")
    .populate("providers_key", "providers_key")
    .exec()
    .then((providers) => {
      res.status(200).json({ providers });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
};


export const deleteProviderById = (req: Request, res: Response) => {
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
  