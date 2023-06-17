import { Box, Typography } from "@mui/joy";
import { FC } from "react";
import { columnWidths } from "../config/columnWidths";
import { AlbumsTableColumn } from "../models/AlbumsTableColumn";
import { columnHeaderNames } from "../config/columnHeaderNames";

type ColumnHeaderProps = {
  column: AlbumsTableColumn;
};

export const ColumnHeader: FC<ColumnHeaderProps> = ({ column }) => {
  return (
    <Box component="th" width={columnWidths[column]}>
      <Typography>{columnHeaderNames[column]}</Typography>
    </Box>
  );
};
