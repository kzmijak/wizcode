import { Chip } from "@mui/joy";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useCategoryQuery } from "../hooks/useCategoryQuery";
import { Category } from "$enums/Category";

type CategoryChipItemProps = {
  category: Category;
};

export const CategoryChipItem: FC<CategoryChipItemProps> = ({ category }) => {
  const { categories, categoryToggleUrl } = useCategoryQuery();
  const isActive = categories.includes(category);

  return (
    <Chip
      variant={isActive ? "solid" : "soft"}
      component={Link}
      to={categoryToggleUrl(category)}
    >
      {category}
    </Chip>
  );
};
