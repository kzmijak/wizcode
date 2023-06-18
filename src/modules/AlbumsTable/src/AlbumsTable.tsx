import { Table } from "@mui/joy";
import { FC } from "react";
import { AlbumsTableRow } from "./models/AlbumsTableRow";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";

type AlbumsTableProps = {
  rows: AlbumsTableRow[];
  displayedRows: AlbumsTableRow[];
};

export const AlbumsTable: FC<AlbumsTableProps> = ({ rows, displayedRows }) => (
  <Table
    aria-label="albums table"
    borderAxis="none"
    color="neutral"
    size="md"
    stickyHeader
    stripe="odd"
    variant="plain"
    hoverRow
  >
    <TableHeader />
    <TableBody allRows={rows} displayedRows={displayedRows} />
  </Table>
);
