import { AlbumModel } from "models/Album";
import { TopAlbumsResponse } from "../models/TopAlbumsResponse";
import { nanoid } from "nanoid";

export const extractAlbumModels = (
  response: TopAlbumsResponse
): AlbumModel[] => {
  return response.feed.entry.map((album) => ({
    id: nanoid(),
    artistName: album["im:artist"].label,
    imageUrl: album["im:image"][0].label,
    title: album["im:name"].label,
  }));
};