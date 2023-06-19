import { CircularProgress, Stack } from "@mui/joy";
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

  if (status === "loading") return <CircularProgress />;
  return (
    <Page title="Albums">
      <Stack flexGrow={1} padding={2}>
        <AlbumsFiltersBar
          search={search}
          onSearchChange={setSearch}
          allCategories={uniqueCategories}
        />
        <AlbumsTable displayedRows={filteredAlbums} rows={albums} />
      </Stack>
    </Page>
  );
};
