import { albumState, useAlbumsFetch } from "modules/AlbumsState";
import { FC, useCallback, useState } from "react";
import { Navigate, useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { PATH_APP } from "routes/src/paths";
import { Page } from "components/Page";
import { AlbumDetails } from "../components/AlbumDetails";
import { CircularProgress } from "@mui/joy";

export const AlbumView: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = useCallback(() => setIsLoading(false), []);
  useAlbumsFetch(finishLoading);

  const { albumId } = useParams();
  const album = useRecoilValue(albumState(albumId));

  if (isLoading) return <CircularProgress />;
  if (!album) return <Navigate to={PATH_APP.notFound} replace />;
  return (
    <Page title={album.title}>
      <AlbumDetails {...album} />
    </Page>
  );
};
