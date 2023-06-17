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
    category: album.category.attributes.label,
    priceInt: parseToPriceInteger(album["im:price"].attributes.amount),
    releaseDate: new Date(album["im:releaseDate"].label),
    songsCount: parseToNumber(album["im:itemCount"].label),
  }));
};

const parseToNumber = (numberString: string) => {
  const numberParsed = +numberString;
  return !isNaN(numberParsed) ? numberParsed : 0;
};

const parseToPriceInteger = (priceString: string) =>
  parseToNumber(priceString) * 100;
