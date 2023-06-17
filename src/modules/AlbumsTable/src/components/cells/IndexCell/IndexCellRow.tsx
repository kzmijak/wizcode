import { Box, Typography } from "@mui/joy";
import { FC } from "react";

type IndexCellRowProps = {
  value: string;
};

export const IndexCellRow: FC<IndexCellRowProps> = ({ value }) => {
  return (
    <Box component="td">
      <Typography>{value}</Typography>
    </Box>
  );
};
