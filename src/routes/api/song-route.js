import express from "express";
import SongController from "../../controllers/song-controller.js";

const songRoutes = express.Router();

songRoutes.get("/", SongController.getSongs);
songRoutes.post("/", SongController.addSong);
songRoutes.get("/popular", SongController.getMostPlayedSongs);

export default songRoutes;
