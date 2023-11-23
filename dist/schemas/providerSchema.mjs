import { Schema, model } from "mongoose";
import { ServiceModel } from "./serviceSchema.mjs";
const providerSchema = new Schema({
    providers_address_country: { type: String, default: 'GBR', required: true },
    providers_name: { type: String, required: true },
    providers_key: { type: String, required: true },
    providers_email: { type: String, required: true },
    consumers_booking_code: { type: Number, required: true },
    services_key: [{ type: Array, ref: ServiceModel, required: true }]
});
export const ProviderModel = model("Providers", providerSchema);
