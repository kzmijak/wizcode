import { Table } from "@mui/joy";
import { AlbumModel } from "models/Album";
import { FC, useState } from "react";
import { Header } from "./components/Header";
import { filterRowsByText } from "./utils/filterRowsByText";

type AlbumsTableProps = {
  rows: AlbumModel[];
};

export const AlbumsTable: FC<AlbumsTableProps> = ({ rows }) => {
  const [search, setSearch] = useState("");

  const displayRows = filterRowsByText(rows, search);

  return (
    <>
      <Header search={search} onSearchChange={setSearch} />
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
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          {displayRows.map((row) => (
            <tr key={row.id}>
              <td>{rows.indexOf(row) + 1}</td>
              <td>
                <img src={row.imageUrl} alt={`${row.title} album image`} />
              </td>
              <td>{row.title}</td>
              <td>{row.artistName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
