import { Divider, Typography } from "@mui/joy";
import { FC } from "react";
import { AlbumComment } from "./AlbumComment";
import {
  albumCommentsState,
  useAlbumCommentsFetch,
} from "modules/AlbumCommentsState";
import { useRecoilValue } from "recoil";
import { AlbumModel } from "models/Album";
import { AlbumCommentSkeleton } from "./AlbumCommentSkeleton";

type CommentsSectionProps = Pick<AlbumModel, "id">;

export const CommentsSection: FC<CommentsSectionProps> = (album) => {
  const { status } = useAlbumCommentsFetch(album.id);
  const albumComments = useRecoilValue(albumCommentsState(album.id));

  const skeleton = [...Array(8).keys()].map(AlbumCommentSkeleton);
  const comments = albumComments.map((comment) => (
    <AlbumComment key={comment.id} {...comment} />
  ));

  return (
    <>
      <Typography level="h4">Comments</Typography>
      <Divider />
      {status === "loading" ? skeleton : comments}
    </>
  );
};
