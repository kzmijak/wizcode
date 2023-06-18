import { AlbumModel } from "models/Album";
import { FC } from "react";
import { AlbumInfo } from "./sections/AlbumInfo";
import { Box, Stack } from "@mui/joy";
import { RelatedAlbums } from "./sections/RelatedAlbums";
import { CommentsSection } from "./sections/comments/CommentsSection";

type AlbumDetailsProps = AlbumModel;

export const AlbumDetails: FC<AlbumDetailsProps> = (album) => {
  return (
    <Stack spacing={2}>
      <Box paddingY={20}>
        <AlbumInfo {...album} />
      </Box>

      <RelatedAlbums id={album.id} category={album.category} />

      <CommentsSection {...album} />
    </Stack>
  );
};
