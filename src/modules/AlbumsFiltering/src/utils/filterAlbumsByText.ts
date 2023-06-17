import { AlbumModel } from "models/Album";

export const filterAlbumsByText = (rows: AlbumModel[], text: string) => {
  const displayRows = rows.filter((row) => {
    return includes(row.title, text) || includes(row.artistName, text);
  });

  return displayRows;
};

const includes = (text1: string, text2: string) =>
  text1.toLowerCase().includes(text2.toLowerCase());
