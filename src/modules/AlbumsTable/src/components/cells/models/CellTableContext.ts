import { AlbumsTableRow } from "modules/AlbumsTable/src/models/AlbumsTableRow";

export type CellTableContext = {
  currentRow: AlbumsTableRow;
  rows: AlbumsTableRow[];
};
