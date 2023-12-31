import { FC } from "react";
import { albumsTableColumnConsts } from "../models/AlbumsTableColumn";
import { ColumnHeader } from "./ColumnHeader";

export const TableHeader: FC = () => {
  return (
    <thead>
      <tr>
        {albumsTableColumnConsts.map((column) => (
          <ColumnHeader key={column} column={column} />
        ))}
      </tr>
    </thead>
  );
};
