import { LinearProgress, Sheet } from "@mui/joy";
import { fetchTopAlbums, extractAlbumModels } from "api/topAlbums";
import { AlbumModel } from "models/Album";
import { RequestStatus } from "models/utils/RequestStatus";
import { AlbumsTable } from "modules/AlbumsTable";
import { FC, useEffect, useState } from "react";

export const AlbumsView: FC = () => {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [status, setStatus] = useState<RequestStatus>("idle");

  useEffect(() => {
    (async () => {
      setStatus("loading");

      try {
        const albumsResponse = await fetchTopAlbums();
        setAlbums(extractAlbumModels(albumsResponse));
        setStatus("success");
      } catch {
        setStatus("error");
      }
    })();
  }, []);

  if (status !== "success") return <LinearProgress />;
  return (
    <Sheet>
      <AlbumsTable rows={albums} />
    </Sheet>
  );
};
