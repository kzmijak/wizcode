import { Category } from "$enums/Category";
import { useQuery } from "utils/useQuery";

const QUERY_KEY = "categories";

export const useCategoryQuery = (category: Category) => {
  const query = useQuery();

  const categoriesString = query.get(QUERY_KEY) ?? "";
  const categories: Category[] = categoriesString.split(",");

  return {
    categories,
    categoryToggleUrl: createCategoryToggleUrl(categoriesString, category),
  };
};

const createCategoryToggleUrl = (
  categoriesString: string,
  category: Category
) => {
  const isActive = categoriesString.includes(category);

  const newCategoriesString = isActive
    ? categoriesString
        .replace(category, "")
        .split(",")
        .filter((element) => !!element)
    : `${categoriesString},${category}`;

  return `?${QUERY_KEY}=${newCategoriesString}`;
};
