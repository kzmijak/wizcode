import { extractAlbumModels, fetchTopAlbums } from "api/topAlbums";
import { selector } from "recoil";

export const albumsFetchQuery = selector({
  key: "AlbumsFetchQuery",
  get: async () => {
    const response = await fetchTopAlbums();
    return extractAlbumModels(response);
  },
});
