import { AlbumModel } from "models/Album";

export const getFakeAlbums = (count: number) =>
  [...Array(count).keys()].map<AlbumModel>((key) => ({
    artistName: "artist" + key,
    category: "category" + key,
    id: key.toString(),
    imageUrl: key.toString(),
    priceInt: key * 100,
    releaseDate: new Date(key),
    songsCount: key,
    title: "title" + key,
  }));
