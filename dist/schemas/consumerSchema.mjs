import { Schema, model } from "mongoose";
import { BookingModel } from "./bookingSchema.mjs";
const consumerSchema = new Schema({
    consumers_address_country: { type: String, required: true },
    consumers_booking_code: { type: String, ref: BookingModel, required: true },
    consumers_name: { type: String, required: true },
    consumers_pronouns: { type: String, required: true },
    consumers_key: { type: String, ref: BookingModel, required: true },
    consumers_email: { type: String, required: true },
});
export const ConsumerModel = model("ConsumerModel", consumerSchema);
