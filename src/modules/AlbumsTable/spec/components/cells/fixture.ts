export const row1 = {
  id: "1",
  imageUrl: "imageurl1",
  artistName: "Famous Artist",
  title: "Some album name",
} as const;
export const row2 = {
  id: "2",
  imageUrl: "imageurl2",
  artistName: "Infamous Artist",
  title: "Other album name",
} as const;
export const row3 = {
  id: "3",
  imageUrl: "imageurl3",
  artistName: "Not famous Artist",
  title: "The album name",
} as const;

export const rows = [row1, row2, row3];
