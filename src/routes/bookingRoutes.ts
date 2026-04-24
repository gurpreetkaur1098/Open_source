import express from "express";
import { bookCar } from "../controllers/bookingController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/book", authMiddleware, bookCar);

export default router;
router.put("/cancel/:id", authMiddleware, cancelBooking);