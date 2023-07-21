import generateID from "../utils/generatorID.js";

class SongModel {
  static songs = [
    {
      title: "Rayuan Perempuan Gila",
      artists: ["Nadin Amizah"],
      genres: ["Indonesian Pop"],
      playedCount: 20,
    },
  ];

  constructor(songID, title, artists, playedCount) {
    this.songID = songID;
    this.title = title;
    this.artists = artists;
    this.playedCount = playedCount;
  }

  static getSongs() {
    return [...this.songs];
  }

  static addSong(title, artists, playedCount) {
    const songID = generateID();
    const newSong = new SongModel(songID, title, artists, playedCount);
    this.songs.push(newSong);

    return newSong;
  }

  static removeSong(indexSong) {
    return this.songs.splice(indexSong, 1);
  }
}

export default SongModel;
