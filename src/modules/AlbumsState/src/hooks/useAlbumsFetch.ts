import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { albumsState } from "../recoil/atoms/albumsState";
import { useEffect } from "react";
import { albumsFetchQuery } from "../recoil/selectors/albumsFetchQuery";

export const useAlbumsFetch = () => {
  const setAlbums = useSetRecoilState(albumsState);
  const albumsLoadable = useRecoilValueLoadable(albumsFetchQuery);

  useEffect(() => {
    if (albumsLoadable.state === "hasValue") {
      setAlbums(albumsLoadable.contents);
    }
  }, [albumsLoadable.contents, albumsLoadable.state, setAlbums]);

  return { status: albumsLoadable.state };
};
