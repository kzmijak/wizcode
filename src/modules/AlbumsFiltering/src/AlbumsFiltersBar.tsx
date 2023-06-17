import { FC } from "react";
import { Search } from "./components/Search";

type AlbumsFiltersBarProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export const AlbumsFiltersBar: FC<AlbumsFiltersBarProps> = ({
  onSearchChange,
  search,
}) => {
  return (
    <section>
      <Search value={search} onChange={onSearchChange} />
    </section>
  );
};
