import { AlbumModel } from "models/Album";

export type AlbumCommentModel = {
  id: string;
  albumId: AlbumModel["id"];
  userName: string;
  userAvatar: string;
  title: string;
  description: string;
  lastModificationDate: Date;
};
