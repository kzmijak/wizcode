import { Box, Typography } from "@mui/joy";
import { FC } from "react";
import { CellTableContext } from "./models/CellTableContext";

type IndexCellProps = Pick<CellTableContext, "currentRow" | "rows">;

export const IndexCell: FC<IndexCellProps> = ({ currentRow, rows }) => {
  const rowIndexInAllRows = rows.indexOf(currentRow);

  return (
    <Box component="td">
      <Typography>{rowIndexInAllRows + 1}</Typography>
    </Box>
  );
};
