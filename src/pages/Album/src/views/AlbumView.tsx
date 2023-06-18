import { albumState, useAlbumsFetch } from "modules/AlbumsState";
import { FC } from "react";
import { Navigate, useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { PATH_APP } from "routes/src/paths";
import { AlbumInfo } from "../components/AlbumInfo";

export const AlbumView: FC = () => {
  useAlbumsFetch();

  const { albumId } = useParams();
  const album = useRecoilValue(albumState(albumId));

  if (!album) return <Navigate to={PATH_APP.notFound} />;
  return <AlbumInfo {...album} />;
};
