import { LinearProgress, Sheet } from "@mui/joy";
import { fetchTopAlbums, extractAlbumModels } from "api/topAlbums";
import { AlbumModel } from "models/Album";
import { RequestStatus } from "models/utils/RequestStatus";
import { AlbumsFiltersBar } from "modules/AlbumsFiltering";
import { AlbumsTable } from "modules/AlbumsTable";
import { FC, useEffect, useState } from "react";
import { getUniqueValues } from "utils/getUniqueValues/getUniqueValues";
import { useFilteredAlbums } from "modules/AlbumsFiltering";

export const AlbumsView: FC = () => {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [status, setStatus] = useState<RequestStatus>("idle");
  const [search, setSearch] = useState("");

  const filteredAlbums = useFilteredAlbums(albums, search);

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
      <AlbumsTable displayedRows={filteredAlbums} rows={albums} />
    </Sheet>
  );
};
