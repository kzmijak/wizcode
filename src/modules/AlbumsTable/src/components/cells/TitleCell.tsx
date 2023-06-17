import { FC } from "react";
import { CellTableContext } from "./models/CellTableContext";
import { Box, Typography } from "@mui/joy";

type TitleCellProps = Pick<CellTableContext, "currentRow">;

export const TitleCell: FC<TitleCellProps> = ({ currentRow }) => {
  return (
    <Box component="td">
      <Typography>{currentRow.title}</Typography>
    </Box>
  );
};
