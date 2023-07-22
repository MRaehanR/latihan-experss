import express from "express";
import apiRoutes from "./api/index.js";

const router = express.Router();

router.use("/api", apiRoutes);
router.use("*", (req, res) => {
  res.error("Route Not Found", 404);
});

export default router;
