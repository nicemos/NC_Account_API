import { Schema, model } from "mongoose";
import { consumer } from "../types/interfaces.js";
import { bookingModel } from "./bookingSchema.mjs";

const consumerSchema = new Schema<consumer>({
  consumers_address_country: { type: String, required: true },
  consumers_booking_code: { type: Number, ref:bookingModel, required: true },
  consumers_name: { type: String, required: true },
  consumers_pronouns: { type: String, required: true },
  consumers_key: { type: String, required: true },
  consumers_email: { type: String, required: true },
});

export const ConsumerModel = model("ConsumerModel", consumerSchema);