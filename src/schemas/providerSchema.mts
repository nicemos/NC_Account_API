import { Schema, model } from "mongoose";
import { provider } from "../types/interfaces.js";
import { ServiceModel } from "./serviceSchema.mjs";

const providerSchema = new Schema<provider>({
  providers_address_country: { type: String, required: true },
  providers_name: { type: String, required: true },
  providers_key: { type: String, required: true },
  providers_email: { type: String, required: true },
  services_key: [{type: String, ref:ServiceModel, required: true}]
});

export const ProviderModel = model("providerModel", providerSchema);