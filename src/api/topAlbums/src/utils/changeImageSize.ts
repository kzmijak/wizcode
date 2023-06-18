import { AlbumModel } from "models/Album";

export const changeImageSize = (
  imageUrl: AlbumModel["imageUrl"],
  size: number
) => {
  return imageUrl.replace("55x55bb", `${size}x${size}bb`);
};
