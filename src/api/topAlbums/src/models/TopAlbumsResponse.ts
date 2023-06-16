export type TopAlbumsResponse = {
  feed: {
    entry: {
      "im:name": {
        label: string;
      };
      "im:image": {
        label: string;
      }[];
      "im:artist": {
        label: string;
      };
    }[];
  };
};
