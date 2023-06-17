import { FC } from "react";
import { AlbumsTableRow } from "../models/AlbumsTableRow";
import { IndexCell, ImageCell, TitleCell } from "./cells";

type TableBodyProps = {
  allRows: AlbumsTableRow[];
  displayedRows: AlbumsTableRow[];
};

export const TableBody: FC<TableBodyProps> = ({ allRows, displayedRows }) => {
  return (
    <tbody>
      {displayedRows.map((row) => (
        <tr key={row.id}>
          <IndexCell currentRow={row} rows={allRows} />
          <ImageCell currentRow={row} value={row.imageUrl} />
          <TitleCell value={row.title} />
          <TitleCell value={row.artistName} />
        </tr>
      ))}
    </tbody>
  );
};
