import { Table } from "@mui/joy";
import { FC, useState } from "react";
import { TableHeader } from "./components/Header";
import { filterRowsByText } from "./utils/filterRowsByText";
import { albumsTableColumnConsts } from "./models/AlbumsTableColumn";
import { ColumnHeader } from "./components/ColumnHeader";
import { AlbumsTableRow } from "./models/AlbumsTableRow";
import { ImageCell, IndexCell, TitleCell } from "./components/cells";

type AlbumsTableProps = {
  rows: AlbumsTableRow[];
};

export const AlbumsTable: FC<AlbumsTableProps> = ({ rows }) => {
  const [search, setSearch] = useState("");

  const displayRows = filterRowsByText(rows, search);

  return (
    <>
      <TableHeader search={search} onSearchChange={setSearch} />
      <Table
        aria-label="albums table"
        borderAxis="none"
        color="neutral"
        size="md"
        stickyHeader
        stripe="odd"
        variant="plain"
      >
        <thead>
          <tr>
            {albumsTableColumnConsts.map((column) => (
              <ColumnHeader column={column} />
            ))}
          </tr>
        </thead>
        <tbody>
          {displayRows.map((row) => (
            <tr key={row.id}>
              <IndexCell currentRow={row} rows={rows} />
              <ImageCell currentRow={row} value={row.imageUrl} />
              <TitleCell value={row.title} />
              <TitleCell value={row.artistName} />
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
