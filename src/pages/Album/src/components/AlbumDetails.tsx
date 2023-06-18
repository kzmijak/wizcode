import { AlbumModel } from "models/Album";
import {
  albumCommentsState,
  useAlbumCommentsFetch,
} from "modules/AlbumCommentsState";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { AlbumInfo } from "./AlbumInfo";
import { AlbumComment } from "./AlbumComment";
import { Box, Divider, Stack, Typography } from "@mui/joy";

type AlbumDetailsProps = AlbumModel;

export const AlbumDetails: FC<AlbumDetailsProps> = (album) => {
  useAlbumCommentsFetch(album.id);
  const albumComments = useRecoilValue(albumCommentsState(album.id));

  return (
    <Stack spacing={2}>
      <Box paddingY={20}>
        <AlbumInfo {...album} />
      </Box>

      <Typography level="h4">Comments</Typography>
      <Divider />
      {albumComments.map((comment) => (
        <AlbumComment key={comment.id} {...comment} />
      ))}
    </Stack>
  );
};
