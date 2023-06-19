import axios from "axios";
import { AlbumCommentsResponseItem } from "../models/AlbumCommentsResponseItem";

export const fetchAlbumComments = async () => {
  const response = await axios.get<AlbumCommentsResponseItem[]>(
    "https://my.api.mockaroo.com/comments.json?key=fcdf6950"
  );

  return response.data;
};
