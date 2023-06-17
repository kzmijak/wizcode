export type TopAlbumsResponse = {
  feed: {
    entry: {
      "im:name": LabelledItem;
      "im:image": LabelledItem[];
      "im:artist": LabelledItem;
      category: CategoryItem;
      "im:releaseDate": LabelledItem;
      "im:price": PriceItem;
      "im:itemCount": LabelledItem;
    }[];
  };
};

type LabelledItem = {
  label: string;
};

type PriceItem = {
  attributes: {
    amount: string;
  };
};

type CategoryItem = {
  attributes: {
    label: string;
  };
};
