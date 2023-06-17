import { FC } from "react";
import { CellTableContext } from "./models/CellTableContext";
import { Box, Typography } from "@mui/joy";

type ArtistCellProps = Pick<CellTableContext, "value">;

export const ArtistCell: FC<ArtistCellProps> = ({ value }) => {
  return (
    <Box component="td">
      <Typography>{value}</Typography>
    </Box>
  );
};
