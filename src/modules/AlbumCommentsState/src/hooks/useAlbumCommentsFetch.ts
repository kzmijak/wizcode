import { AlbumModel } from "models/Album";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { albumCommentsState } from "../recoil/atoms/albumCommentsState";
import { albumCommentsFetchQuery } from "../recoil/selectors/albumCommentsFetchQuery";
import { useEffect } from "react";

export const useAlbumCommentsFetch = (albumId: AlbumModel["id"]) => {
  const setAlbumComments = useSetRecoilState(albumCommentsState(albumId));
  const albumCommentsLoadable = useRecoilValueLoadable(
    albumCommentsFetchQuery(albumId)
  );

  useEffect(() => {
    if (albumCommentsLoadable.state === "hasValue") {
      setAlbumComments(albumCommentsLoadable.contents);
    }
  }, [
    albumCommentsLoadable.contents,
    albumCommentsLoadable.state,
    setAlbumComments,
  ]);

  return { status: albumCommentsLoadable.state };
};
