import { Stack, Tooltip } from "@mui/joy";
import { Picture } from "components/Picture";
import { AlbumModel } from "models/Album";
import { FC } from "react";
import { Link } from "react-router-dom";
import { PATH_APP } from "routes/src/paths";

type AlbumsShowcaseProps = { albums: AlbumModel[] };

export const AlbumsShowcase: FC<AlbumsShowcaseProps> = ({ albums }) => {
  return (
    <Stack spacing={2} component="section" direction="row" flexWrap="nowrap">
      {albums.map((album) => (
        <Tooltip key={album.id} title={album.title}>
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
