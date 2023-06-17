import { Category } from "$enums/Category";
import { useQuery } from "utils/useQuery";

const QUERY_KEY = "categories";

export const useCategoryQuery = () => {
  const query = useQuery();

  const categoriesString = query.get(QUERY_KEY) ?? "";
  const categories: Category[] = convertToList(categoriesString);

  return {
    categories,
    categoryToggleUrl: (category: Category) =>
      createCategoryToggleUrl(categoriesString, category),
  };
};

const createCategoryToggleUrl = (
  categoriesString: string,
  category: Category
) => {
  const isActive = categoriesString.includes(category);

  const newCategoriesString = isActive
    ? convertToList(categoriesString.replace(category, ""))
    : `${categoriesString ? categoriesString + "," : ""}${category}`;

  return `?${QUERY_KEY}=${newCategoriesString}`;
};

const convertToList = (categoryString: string) =>
  categoryString.split(",").filter((el) => !!el);
