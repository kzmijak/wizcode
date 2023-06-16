import axios from "axios";
import { TopAlbumsResponse } from "../models/TopAlbumsResponse";

export const fetchTopAlbums = async () => {
  const response = await axios.get<TopAlbumsResponse>(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );
  return response.data;
};
