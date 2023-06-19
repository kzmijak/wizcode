import { AlbumModel } from "models/Album";
import { FC } from "react";
import { AlbumInfo } from "./sections/AlbumInfo";
import { Box, Stack } from "@mui/joy";
import { CommentsSection } from "./sections/comments/CommentsSection";
import { RelatedAlbumsSection } from "./sections/relatedAlbums/RelatedAlbumsSection";
import { useRwd } from "hooks/useRwd";

type AlbumDetailsProps = AlbumModel;

export const AlbumDetails: FC<AlbumDetailsProps> = (album) => {
  const { isDesktop } = useRwd();

  return (
    <Stack spacing={2}>
      <Box paddingY={20}>
        <AlbumInfo {...album} orientation={isDesktop ? "row" : "column"} />
      </Box>
      <RelatedAlbumsSection id={album.id} category={album.category} />
      <CommentsSection {...album} />
    </Stack>
  );
};
