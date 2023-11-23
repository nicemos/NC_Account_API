import { Schema, model } from "mongoose";
import { service } from "../types/interfaces.js";
import { ConsumerModel } from "./consumerSchema.mjs";

const serviceSchema = new Schema<service>({
    services_duration: { type: Number, required: true },
    services_cost: { type: Number, required: true },
    services_title: { type: String, required: true },
    services_descriptions: { type: String, required: true },
    services_key: { type: String, required: true },
    providers_key: {type:String, required: true},
    consumers_booking_code: { type: Number, required: true },
    consumers_key: [{type:Array, ref: ConsumerModel, required:false }]
});

export const ServiceModel = model("Services", serviceSchema);