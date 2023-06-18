import { Stack, Tooltip } from "@mui/joy";
import { Picture } from "components/Picture";
import { AlbumModel } from "models/Album";
import { albumsByCategoryState } from "modules/AlbumsState";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { PATH_APP } from "routes/src/paths";

type RelatedAlbumsProps = Pick<AlbumModel, "id" | "category">;

export const RelatedAlbums: FC<RelatedAlbumsProps> = (album) => {
  const sameCategoryAlbums = useRecoilValue(
    albumsByCategoryState(album.category)
  );
  const relatedAlbums = sameCategoryAlbums.filter(
    (sameCategoryAlbum) => sameCategoryAlbum.id !== album.id
  );
  relatedAlbums.splice(15);

  if (relatedAlbums.length === 0) return null;
  return (
    <Stack spacing={2} component="section" direction="row" flexWrap="nowrap">
      {relatedAlbums.map((album) => (
        <Tooltip title={album.title}>
          <Stack
            component={Link}
            to={PATH_APP.album + album.id}
            sx={(theme) => ({
              backgroundColor: theme.palette.background.level1,
            })}
            direction="row"
          >
            <Picture
              src={album.imageUrl}
              alt={`${album.title} - related album cover`}
              width={55}
              height={55}
            />
          </Stack>
        </Tooltip>
      ))}
    </Stack>
  );
};
