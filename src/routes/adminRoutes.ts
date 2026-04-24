import express from "express";
import { getAnalytics } from "../controllers/adminController";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/analytics", authMiddleware, isAdmin, getAnalytics);

export default router;