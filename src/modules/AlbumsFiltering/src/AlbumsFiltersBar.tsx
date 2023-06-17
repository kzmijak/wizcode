import { FC } from "react";
import { Search } from "./components/Search";
import { CategoryChips } from "modules/CategoryFilter";
import { Category } from "$enums/Category";

type AlbumsFiltersBarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  allCategories: Category[];
};

export const AlbumsFiltersBar: FC<AlbumsFiltersBarProps> = ({
  onSearchChange,
  search,
  allCategories,
}) => (
  <section>
    <Search value={search} onChange={onSearchChange} />
    <CategoryChips allCategories={allCategories} />
  </section>
);
