import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { albumsState } from "../recoil/atoms/albumsState";
import { useEffect } from "react";
import { albumsFetchQuery } from "../recoil/selectors/albumsFetchQuery";
import { AlbumModel } from "models/Album";

export const useAlbumsFetch = (
  onAlbumsLoaded?: (albums: AlbumModel[]) => void
) => {
  const setAlbums = useSetRecoilState(albumsState);
  const albumsLoadable = useRecoilValueLoadable(albumsFetchQuery);

  useEffect(() => {
    if (albumsLoadable.state === "hasValue") {
      setAlbums(albumsLoadable.contents);
      onAlbumsLoaded?.(albumsLoadable.contents);
    }
  }, [
    albumsLoadable.contents,
    albumsLoadable.state,
    onAlbumsLoaded,
    setAlbums,
  ]);

  return { status: albumsLoadable.state };
};
