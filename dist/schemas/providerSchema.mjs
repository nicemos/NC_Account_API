import { Schema, model } from "mongoose";
import { serviceModel } from "./serviceSchema.mjs";
const providerSchema = new Schema({
    providers_address_country: { type: String, required: true },
    providers_name: { type: String, required: true },
    providers_key: { type: String, required: true },
    providers_email: { type: String, required: true },
    services_key: [{ type: String, ref: serviceModel, required: true }]
});
export const providerModel = model("providerModel", providerSchema);
