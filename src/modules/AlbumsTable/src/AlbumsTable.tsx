import { Table } from "@mui/joy";
import { FC, useState } from "react";
import { filterRowsByText } from "./utils/filterRowsByText";
import { AlbumsTableRow } from "./models/AlbumsTableRow";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { AlbumsFiltersBar } from "modules/AlbumsFiltering";

type AlbumsTableProps = {
  rows: AlbumsTableRow[];
};

export const AlbumsTable: FC<AlbumsTableProps> = ({ rows }) => {
  const [search, setSearch] = useState("");

  const displayedRows = filterRowsByText(rows, search);

  return (
    <>
      <AlbumsFiltersBar search={search} onSearchChange={setSearch} />
      <Table
        aria-label="albums table"
        borderAxis="none"
        color="neutral"
        size="md"
        stickyHeader
        stripe="odd"
        variant="plain"
      >
        <TableHeader />
        <TableBody allRows={rows} displayedRows={displayedRows} />
      </Table>
    </>
  );
};
