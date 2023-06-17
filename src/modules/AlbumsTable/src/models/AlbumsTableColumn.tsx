export const albumsTableColumnConsts = [
  "Index",
  "Image",
  "Title",
  "Artist",
] as const;

export type AlbumsTableColumn = (typeof albumsTableColumnConsts)[number];
