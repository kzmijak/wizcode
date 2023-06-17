import { FormControl, FormLabel, Input } from "@mui/joy";
import { ChangeEvent, FC } from "react";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Search: FC<SearchProps> = ({ onChange, value }) => {
  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>Search</FormLabel>
      <Input
        placeholder="Type here..."
        type="search"
        value={value}
        onChange={handleUserInput}
      />
    </FormControl>
  );
};
