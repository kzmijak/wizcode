import { AlbumModel } from "models/Album";
import { selectorFamily } from "recoil";
import { albumsState } from "../atoms/albumsState";

export const albumState = selectorFamily({
  key: "Album",
  get:
    (albumId: AlbumModel["id"] | undefined) =>
    ({ get }) => {
      const allAlbums = get(albumsState);
      return allAlbums.find((album) => album.id === albumId);
    },
});
