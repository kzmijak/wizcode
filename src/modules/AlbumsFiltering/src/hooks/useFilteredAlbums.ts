import { AlbumModel } from "models/Album";
import { useCategoryQuery } from "modules/CategoryFilter";
import { filterAlbumsByText } from "../utils/filterAlbumsByText";
import { filterAlbumsByCategory } from "../utils/filterAlbumsByCategory";

export const useFilteredAlbums = (albums: AlbumModel[], search = "") => {
  const { categories } = useCategoryQuery();

  return filterAlbumsByCategory(
    filterAlbumsByText(albums, search),
    ...categories
  );
};
