import { FC } from "react";
import { Search } from "./utils/Search";

type HeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export const Header: FC<HeaderProps> = ({ onSearchChange, search }) => {
  return (
    <section>
      <Search value={search} onChange={onSearchChange} />
    </section>
  );
};
