import { FC } from "react";
import { CellTableContext } from "./models/CellTableContext";
import { Box, Typography } from "@mui/joy";

type TitleCellProps = Pick<CellTableContext, "value">;

export const TitleCell: FC<TitleCellProps> = ({ value }) => {
  return (
    <Box component="td">
      <Typography>{value}</Typography>
    </Box>
  );
};
