import { FC } from "react";
import { CellTableContext } from "./models/CellTableContext";
import { Box } from "@mui/joy";

type ImageCellProps = Pick<CellTableContext, "value" | "currentRow">;

export const ImageCell: FC<ImageCellProps> = ({ value, currentRow }) => {
  return (
    <Box component="td">
      <img src={value} alt={`${currentRow.title} album image`} />
    </Box>
  );
};
