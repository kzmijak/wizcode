import { LinearProgress, Sheet } from "@mui/joy";
import { fetchTopAlbums, extractAlbumModels } from "api/topAlbums";
import { AlbumModel } from "models/Album";
import { RequestStatus } from "models/utils/RequestStatus";
import { AlbumsFiltersBar } from "modules/AlbumsFiltering";
import { AlbumsTable } from "modules/AlbumsTable";
import { FC, useEffect, useState } from "react";
import { filterRowsByText } from "./utils/filterRowsByText";
import { useQuery } from "utils/useQuery";
import { getUniqueValues } from "utils/getUniqueValues/getUniqueValues";

export const AlbumsView: FC = () => {
  const query = useQuery();

  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [status, setStatus] = useState<RequestStatus>("idle");
  const [search, setSearch] = useState("");

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

  const allCategories = getUniqueValues(albums.map((album) => album.category));

  if (status !== "success") return <LinearProgress />;
  return (
    <Sheet>
      <AlbumsFiltersBar
        search={search}
        onSearchChange={setSearch}
        allCategories={allCategories}
      />
      <AlbumsTable
        displayedRows={filterRowsByText(albums, search)}
        rows={albums}
      />
    </Sheet>
  );
};
