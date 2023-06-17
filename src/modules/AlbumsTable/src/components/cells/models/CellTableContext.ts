import { AlbumsTableRow } from "modules/AlbumsTable/src/models/AlbumsTableRow";

export type CellTableContext<TValueType = string> = {
  value: TValueType;
  currentRow: AlbumsTableRow;
  rows: AlbumsTableRow[];
};
