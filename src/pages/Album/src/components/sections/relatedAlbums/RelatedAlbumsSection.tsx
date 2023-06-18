import { Button, Divider, Stack, Typography } from "@mui/joy";
import { AlbumModel } from "models/Album";
import { FC } from "react";
import { AlbumsShowcase } from "./AlbumsShowcase";
import { Link } from "react-router-dom";
import { PATH_APP } from "routes/src/paths";
import { albumsByCategoryState } from "modules/AlbumsState";
import { useRecoilValue } from "recoil";

type RelatedAlbumsSectionProps = Pick<AlbumModel, "id" | "category">;

export const RelatedAlbumsSection: FC<RelatedAlbumsSectionProps> = (album) => {
  const sameCategoryAlbums = useRecoilValue(
    albumsByCategoryState(album.category)
  );
  const relatedAlbums = sameCategoryAlbums.filter(
    (sameCategoryAlbum) => sameCategoryAlbum.id !== album.id
  );
  relatedAlbums.splice(14);

  if (relatedAlbums.length === 0) return null;
  return (
    <>
      <Typography level="h4">Other albums you may like</Typography>
      <Divider />
      <Stack direction="row" justifyContent="space-between">
        <AlbumsShowcase albums={relatedAlbums} />
        <Button component={Link} to={PATH_APP.root}>
          Show all
        </Button>
      </Stack>
    </>
  );
};
