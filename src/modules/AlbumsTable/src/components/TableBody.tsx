import { FC } from "react";
import { AlbumsTableRow } from "../models/AlbumsTableRow";
import { IndexCell, ImageCell, TitleCell, ArtistCell } from "./cells";
import { Tooltip } from "@mui/joy";
import { RowTooltipContent } from "./RowTooltipContent";
import { TableRowStyled } from "./styles/TableRowStyled";

type TableBodyProps = {
  allRows: AlbumsTableRow[];
  displayedRows: AlbumsTableRow[];
};

export const TableBody: FC<TableBodyProps> = ({ allRows, displayedRows }) => {
  return (
    <tbody>
      {displayedRows.map((row) => (
        <Tooltip
          arrow
          color="primary"
          title={<RowTooltipContent {...row} />}
          key={row.id}
          placement="right"
        >
          <TableRowStyled>
            <IndexCell currentRow={row} rows={allRows} />
            <ImageCell currentRow={row} />
            <TitleCell currentRow={row} />
            <ArtistCell currentRow={row} />
          </TableRowStyled>
        </Tooltip>
      ))}
    </tbody>
  );
};
