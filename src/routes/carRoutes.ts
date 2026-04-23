import { authMiddleware } from "../middleware/authMiddleware";

router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Access granted" });
});