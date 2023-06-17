import { FC } from "react";
import { Search } from "./filters/Search";

type TableHeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export const TableNavigation: FC<TableHeaderProps> = ({
  onSearchChange,
  search,
}) => {
  return (
    <section>
      <Search value={search} onChange={onSearchChange} />
    </section>
  );
};
