import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Car Rental Backend Running");
});

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/car_booking_db";

// Connect MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

export default app; 