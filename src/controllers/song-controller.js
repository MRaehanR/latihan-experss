import SongService from "../services/song-service.js";

class SongController {
  static getSongs(req, res, next) {
    try {
      const songs = SongService.getSongs();

      res.success("Success get songs", songs);
    } catch (error) {
      next(error);
    }
  }

  static addSong(req, res, next) {
    try {
      const { title, artists, playedCount } = req.body;
      const song = SongService.addSong(title, artists, playedCount);

      res.success("Success Add Song", song);
    } catch (error) {
      next(error);
    }
  }

  static getMostPlayedSongs(req, res, next) {
    try {
      const mostPlayedSongs = SongService.getMostPlayedSongs();

      res.success("Success get most played songs", mostPlayedSongs);
    } catch (error) {
      next(error);
    }
  }
}

export default SongController;
