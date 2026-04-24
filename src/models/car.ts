import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: String,
  brand: String,
  pricePerDay: Number,
  available: { type: Boolean, default: true },
});

export default mongoose.model("Car", carSchema);