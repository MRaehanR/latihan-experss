import express from "express";
import songRoutes from "./song-route.js";

const apiRoutes = express.Router();

apiRoutes.use("/songs", songRoutes);

export default apiRoutes;
