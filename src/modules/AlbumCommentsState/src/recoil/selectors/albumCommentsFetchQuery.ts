import {
  arrayMapAlbumsCommentsResponseItemToModel,
  fetchAlbumComments,
} from "api/albumComments";
import { AlbumModel } from "models/Album";
import { selectorFamily } from "recoil";

export const albumCommentsFetchQuery = selectorFamily({
  key: "AlbumCommentsFetch",
  get: (albumId: AlbumModel["id"]) => async () => {
    const response = await fetchAlbumComments();
    return arrayMapAlbumsCommentsResponseItemToModel(response, albumId);
  },
});
