import { Sheet, Stack } from "@mui/joy";
import { FC } from "react";
import { CategoryChipItem } from "./components/CategoryChipItem";
import { Category } from "$enums/Category";

export type CategoryChipsProps = {
  allCategories: Category[];
};

export const CategoryChips: FC<CategoryChipsProps> = ({ allCategories }) => {
  return (
    <Sheet>
      <Stack
        direction="row"
        spacing={0.5}
        maxWidth="100%"
        flexWrap="wrap"
        padding={1}
      >
        {allCategories.map((category) => (
          <CategoryChipItem key={category} category={category} />
        ))}
      </Stack>
    </Sheet>
  );
};
