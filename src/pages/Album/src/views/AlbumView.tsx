import { Typography } from "@mui/joy";
import { albumState, useAlbumsFetch } from "modules/AlbumsState";
import { FC } from "react";
import { Navigate, useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { PATH_APP } from "routes/src/paths";

export const AlbumView: FC = () => {
  const { albumId } = useParams();

  useAlbumsFetch();

  const album = useRecoilValue(albumState(albumId));

  if (!album) return <Navigate to={PATH_APP.notFound} />;

  return <Typography>Hello</Typography>;
};
