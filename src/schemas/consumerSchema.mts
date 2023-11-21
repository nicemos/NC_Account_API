import { Schema, model } from "mongoose";
import { consumer } from "../types/interfaces.js";

const consumerSchema = new Schema<consumer>({
  consumers_name: { type: String, required: true },
  consumers_pronouns: { type: String, required: true },
  consumers_email: { type: String, required: true },
  consumers_address_country: { type: String, default:'GBR', required: true },
  consumer_key: { type: String, required: true },
  consumers_booking_code: { type: Number, required: true },
});

export const ConsumerModel = model("Consumers", consumerSchema);