import { Sheet, Stack, Typography, TypographySystem } from "@mui/joy";
import { changeImageSize } from "api/topAlbums";
import { Picture } from "components/Picture";
import { AlbumModel } from "models/Album";
import { FC } from "react";

const getTitleLevel = (length: number): keyof TypographySystem => {
  if (length <= 40) {
    return "display2";
  } else if (length <= 100) {
    return "h1";
  } else if (length <= 200) {
    return "h2";
  } else {
    return "h4";
  }
};

type AlbumInfoProps = Pick<AlbumModel, "artistName" | "imageUrl" | "title"> & {
  orientation?: "row" | "column";
};

export const AlbumInfo: FC<AlbumInfoProps> = ({
  artistName,
  imageUrl,
  title,
  orientation,
}) => {
  const isVertical = orientation === "column";

  const boxSize = isVertical ? "60%" : 500;

  return (
    <Stack
      component={Sheet}
      direction={orientation}
      justifyContent="center"
      alignItems="center"
      spacing={10}
    >
      <Picture
        src={changeImageSize(imageUrl, 500)}
        alt={`${title} album cover`}
        height={boxSize}
        width={boxSize}
      />
      <Stack
        maxWidth={boxSize}
        minHeight="100%"
        justifyContent="center"
        alignItems={isVertical ? "center" : "start"}
        textAlign={isVertical ? "center" : "left"}
        padding={3}
      >
        <Typography level={getTitleLevel(title.length)} fontWeight="bold">
          {title}
        </Typography>
        <Typography level="h2">{artistName}</Typography>
      </Stack>
    </Stack>
  );
};
