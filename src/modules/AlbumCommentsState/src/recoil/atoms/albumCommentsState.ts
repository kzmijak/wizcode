import { AlbumModel } from "models/Album";
import { AlbumCommentModel } from "models/AlbumComment";
import { atomFamily } from "recoil";

export const albumCommentsState = atomFamily<
  AlbumCommentModel[],
  AlbumModel["id"]
>({
  key: "AlbumComments",
  default: [],
});
