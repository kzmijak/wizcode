import { selector } from "recoil";
import { getUniqueValues } from "utils/getUniqueValues";
import { albumsState } from "../atoms/albumsState";

export const uniqueAlbumsCategoriesState = selector({
  key: "UniqueAlbumsCategoriesState",
  get: ({ get }) => {
    const albums = get(albumsState);

    const albumCategories = albums.map((album) => album.category);

    return getUniqueValues(albumCategories);
  },
});
