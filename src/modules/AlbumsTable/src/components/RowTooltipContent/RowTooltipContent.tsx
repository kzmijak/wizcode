import { FC } from "react";
import { AlbumsTableRow } from "../../models/AlbumsTableRow";
import { Box } from "@mui/joy";
import { Attribute } from "./utils/Attribute";

type RowTooltipContentProps = AlbumsTableRow;

export const RowTooltipContent: FC<RowTooltipContentProps> = (props) => {
  const { artistName, category, priceInt, releaseDate, songsCount, title } =
    props;
  return (
    <Box width={200}>
      <Attribute label="Title" value={title} />
      <Attribute label="Arist" value={artistName} />
      <Attribute label="Category" value={category} />
      <Attribute
        label="Release date"
        value={releaseDate.toLocaleDateString()}
      />
      <Attribute label="Songs" value={songsCount} />
      <Attribute label="Price" value={"$" + priceInt / 100} />
    </Box>
  );
};
