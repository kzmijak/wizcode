import { Table } from "@mui/joy";
import { AlbumModel } from "models/Album";
import { FC } from "react";

type AlbumsTableProps = {
  rows: AlbumModel[];
};

export const AlbumsTable: FC<AlbumsTableProps> = ({ rows }) => {
  return (
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
        {rows.map((row, index) => (
          <tr key={row.id}>
            <td>{index + 1}</td>
            <td>
              <img src={row.imageUrl} alt={`${row.title} album image`} />
            </td>
            <td>{row.title}</td>
            <td>{row.artistName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
