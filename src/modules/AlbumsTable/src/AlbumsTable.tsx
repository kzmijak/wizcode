import { Table } from "@mui/joy";
import { FC, useState } from "react";
import { TableNavigation } from "./components/TableNavigation";
import { filterRowsByText } from "./utils/filterRowsByText";
import { AlbumsTableRow } from "./models/AlbumsTableRow";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";

type AlbumsTableProps = {
  rows: AlbumsTableRow[];
};

export const AlbumsTable: FC<AlbumsTableProps> = ({ rows }) => {
  const [search, setSearch] = useState("");

  const displayedRows = filterRowsByText(rows, search);

  return (
    <>
      <TableNavigation search={search} onSearchChange={setSearch} />
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
