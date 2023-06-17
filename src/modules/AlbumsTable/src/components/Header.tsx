import { FC } from "react";
import { Search } from "./utils/Search";

type TableHeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export const TableHeader: FC<TableHeaderProps> = ({
  onSearchChange,
  search,
}) => {
  return (
    <section>
      <Search value={search} onChange={onSearchChange} />
    </section>
  );
};
