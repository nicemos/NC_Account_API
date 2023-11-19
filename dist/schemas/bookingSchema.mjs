import { Schema, model } from "mongoose";
const bookingSchema = new Schema({
    key: { type: String, required: true },
    start: { type: Date, required: true },
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true },
    end: { type: Date, required: true },
    notes: { type: String || null, required: true },
    consumer_key: { type: String, required: true },
    consumers_booking_code: { type: Number, required: true },
    providers_key: { type: String, required: true },
    services_key: { type: String, required: true },
});
export const bookingModel = model("bookingModel", bookingSchema);
