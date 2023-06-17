import { FC } from "react";
import { CellTableContext } from "./models/CellTableContext";
import { Box } from "@mui/joy";

type ImageCellProps = Pick<CellTableContext, "currentRow">;

export const ImageCell: FC<ImageCellProps> = ({ currentRow }) => {
  return (
    <Box component="td">
      <img src={currentRow.imageUrl} alt={`${currentRow.title} album image`} />
    </Box>
  );
};
