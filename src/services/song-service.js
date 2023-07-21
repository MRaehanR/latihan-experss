import { ResponseError } from "../errors/response-error.js";
import SongModel from "../models/song-model.js";
import { capitalizeWords } from "../utils/capitalizeWords.js";

class SongService {
  static getSongs() {
    const songs = SongModel.getSongs();

    if (songs.length === 0) {
      throw new ResponseError(404, "Songs Empty");
    }
    return songs;
  }

  static addSong(title, artists, playedCount) {
    title = capitalizeWords(title);
    artists = [capitalizeWords(...artists)];

    const addedSong = SongModel.addSong(title, artists, playedCount);
    const songs = SongModel.getSongs();

    return { addedSong, songs };
  }

  static removeSong(title) {
    title = title.split(" ").join("").toLowerCase();

    const songIndex = SongModel.getSongs().findIndex((song) => {
      song = song.title.split(" ").join("").toLowerCase();

      return song === title;
    });

    if (songIndex == -1) {
      throw new ResponseError(404, "Song Not Found");
    }

    const removedSongs = SongModel.removeSong();
    const songs = SongModel.getSongs();

    return { removedSongs, songs };
  }

  static getMostPlayedSongs() {
    const unsortedSongs = SongModel.getSongs();

    if (unsortedSongs.length === 0) {
      throw new ResponseError(404, "Songs Empty");
    }

    const sortedSongs = unsortedSongs.sort((a, b) =>
      a.playedCount > b.playedCount ? -1 : 1
    );

    return sortedSongs;
  }
}

export default SongService;
