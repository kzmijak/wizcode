import { LinearProgress, Sheet } from "@mui/joy";
import { AlbumsFiltersBar } from "modules/AlbumsFiltering";
import { AlbumsTable } from "modules/AlbumsTable";
import { FC, useState } from "react";
import { useFilteredAlbums } from "modules/AlbumsFiltering";
import { useRecoilValue } from "recoil";
import {
  albumsState,
  uniqueAlbumsCategoriesState,
  useAlbumsFetch,
} from "modules/AlbumsState";
import { Page } from "components/Page";

export const AlbumsView: FC = () => {
  const [search, setSearch] = useState("");
  const albums = useRecoilValue(albumsState);
  const uniqueCategories = useRecoilValue(uniqueAlbumsCategoriesState);
  const filteredAlbums = useFilteredAlbums(albums, search);

  const { status } = useAlbumsFetch();

  if (status === "loading") return <LinearProgress />;
  return (
    <Page title="Albums">
      <Sheet>
        <AlbumsFiltersBar
          search={search}
          onSearchChange={setSearch}
          allCategories={uniqueCategories}
        />
        <AlbumsTable displayedRows={filteredAlbums} rows={albums} />
      </Sheet>
    </Page>
  );
};
