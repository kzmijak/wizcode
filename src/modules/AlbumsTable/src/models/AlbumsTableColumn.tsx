import { AlbumModel } from "models/Album";

export const albumsTableColumnConsts = [
  "Index",
  "Image",
  "Title",
  "Artist",
] as const;

export type AlbumsTableColumn = (typeof albumsTableColumnConsts)[number];

export const albumTableColumnToModelKeyDict: Record<
  AlbumsTableColumn,
  keyof AlbumModel
> = {
  Index: "id",
  Image: "imageUrl",
  Title: "title",
  Artist: "artistName",
};
