import { FC } from "react";
import { CellTableContext } from "./models/CellTableContext";
import { Box, Typography } from "@mui/joy";

type ArtistCellProps = Pick<CellTableContext, "currentRow">;

export const ArtistCell: FC<ArtistCellProps> = ({ currentRow }) => {
  return (
    <Box component="td">
      <Typography>{currentRow.artistName}</Typography>
    </Box>
  );
};
