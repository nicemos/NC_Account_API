import { Schema, model } from "mongoose";
const consumerSchema = new Schema({
    consumers_name: { type: String, required: true },
    consumers_pronouns: { type: String, required: true },
    consumers_email: { type: String, required: true },
    consumers_address_country: { type: String, default: 'GBR', required: true },
    consumers_booking_code: { type: Number, required: true },
    consumer_key: { type: String, required: true },
});
export const ConsumerModel = model("ConsumerModel", consumerSchema);
