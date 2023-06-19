import { Category } from "$enums/Category";
import { selectorFamily } from "recoil";
import { albumsState } from "../atoms/albumsState";

export const albumsByCategoryState = selectorFamily({
  key: "AlbumsByCategory",
  get:
    (category: Category) =>
    ({ get }) => {
      const allAlbums = get(albumsState);
      return allAlbums.filter((album) => album.category === category);
    },
});
