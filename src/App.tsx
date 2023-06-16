import { useEffect, useState } from "react";
import { extractAlbumModels, fetchTopAlbums } from "api/topAlbums";
import { RequestStatus } from "models/utils/RequestStatus";
import { AlbumModel } from "models/Album";
import { AlbumsTable } from "modules/AlbumsList";
import { Sheet } from "@mui/joy";

export const App = () => {
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

  if (status !== "success") return null;

  return (
    <Sheet>
      <AlbumsTable rows={albums} />
    </Sheet>
  );
};
