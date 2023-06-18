import { AlbumModel } from "models/Album";
import { atom } from "recoil";

export const albumsState = atom<AlbumModel[]>({
  key: "AlbumsState",
  default: [],
});
