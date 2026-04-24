import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: String,
  carId: String,
  startDate: Date,
  endDate: Date,
  status: { type: String, default: "pending" },
});

export default mongoose.model("Booking", bookingSchema);