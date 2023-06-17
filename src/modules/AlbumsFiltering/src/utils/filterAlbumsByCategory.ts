import { Category } from "$enums/Category";
import { AlbumModel } from "models/Album";

export const filterAlbumsByCategory = (
  albums: AlbumModel[],
  ...categories: Category[]
) => {
  if (categories.length === 0) return albums;
  return albums.filter((album) => categories.includes(album.category));
};
