import { authMiddleware } from "../middleware/authMiddleware";

router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Access granted" });
});
import express from "express";
import { addCar } from "../controllers/carController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

// Protected route (only logged-in users)
router.post("/cars", authMiddleware, addCar);

export default router;