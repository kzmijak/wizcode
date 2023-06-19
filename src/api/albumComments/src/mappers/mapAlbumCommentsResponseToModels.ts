import { AlbumCommentModel } from "models/AlbumComment";
import { AlbumCommentsResponseItem } from "../models/AlbumCommentsResponseItem";

const mapAlbumsCommentsResponseItemToModel = (
  {
    description,
    id,
    lastModificationDate,
    title,
    userAvatar,
    userName,
  }: AlbumCommentsResponseItem,
  albumId: string
): AlbumCommentModel => ({
  albumId,
  description,
  id,
  lastModificationDate: new Date(lastModificationDate),
  title,
  userAvatar,
  userName,
});

export const arrayMapAlbumsCommentsResponseItemToModel = (
  items: AlbumCommentsResponseItem[],
  albumId: string
) => items.map((item) => mapAlbumsCommentsResponseItemToModel(item, albumId));
