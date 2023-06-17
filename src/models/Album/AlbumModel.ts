import { Category } from "$enums/Category";

export type AlbumModel = {
  id: string;
  imageUrl: string;
  title: string;
  artistName: string;
  category: Category;
  releaseDate: Date;
  priceInt: number;
  songsCount: number;
};
