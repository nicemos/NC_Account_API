import { Schema, model } from "mongoose";
import { ConsumerModel } from "./consumerSchema.mjs";
const serviceSchema = new Schema({
    services_duration: { type: String, required: true },
    services_cost: { type: String, required: true },
    services_title: { type: String, required: true },
    services_descriptions: { type: String, required: true },
    services_key: { type: String, required: true },
    consumers_key: [{ type: String, ref: ConsumerModel, required: false }]
});
export const ServiceModel = model("serviceModel", serviceSchema);
