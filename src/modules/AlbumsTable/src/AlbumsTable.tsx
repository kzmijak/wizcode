import { Table } from "@mui/joy";
import { FC } from "react";
import { AlbumsTableRow } from "./models/AlbumsTableRow";
import { TableHeader } from "./components/TableHeader";
import { TableBody, TableBodyProps } from "./components/TableBody";

type AlbumsTableProps = {
  rows: AlbumsTableRow[];
  displayedRows: AlbumsTableRow[];
} & Pick<TableBodyProps, "tooltipPlacement">;

export const AlbumsTable: FC<AlbumsTableProps> = ({
  rows,
  displayedRows,
  tooltipPlacement,
}) => (
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
    <TableBody
      allRows={rows}
      displayedRows={displayedRows}
      tooltipPlacement={tooltipPlacement}
    />
  </Table>
);
