import { FC } from "react";
import { AlbumsTableRow } from "../models/AlbumsTableRow";
import { IndexCell, ImageCell, TitleCell, ArtistCell } from "./cells";
import { Tooltip } from "@mui/joy";
import { RowTooltipContent } from "./RowTooltipContent";
import { TableRowStyled } from "./styles/TableRowStyled";
import { useNavigate } from "react-router";

export type TableBodyProps = {
  allRows: AlbumsTableRow[];
  displayedRows: AlbumsTableRow[];
  tooltipPlacement?: "right" | "bottom";
};

export const TableBody: FC<TableBodyProps> = ({
  allRows,
  displayedRows,
  tooltipPlacement = "bottom",
}) => {
  const navigate = useNavigate();

  return (
    <tbody>
      {displayedRows.map((row) => (
        <Tooltip
          arrow
          color="primary"
          title={<RowTooltipContent {...row} />}
          key={row.id}
          placement={tooltipPlacement}
        >
          <TableRowStyled onClick={() => navigate(row.id)}>
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
