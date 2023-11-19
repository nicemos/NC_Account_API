import { Schema, model } from "mongoose";
import { service } from "../types/interfaces.js";
import { ConsumerModel } from "./consumerSchema.mjs";

const serviceSchema = new Schema<service>({
    services_duration: { type: String, required: true },
    services_cost: { type: String, required: true },
    services_title: { type: String, required: true },
    services_descriptions: { type: String, required: true },
    services_key: { type: String, required: true },
    consumers_key: [{type:String, ref: ConsumerModel, required:false }]
});

export const serviceModel = model("serviceModel", serviceSchema);