import {
  ActiveCategoryContainer,
  BaseCategoryContainer,
  CategoryNameText,
} from "./category.styles";

export const CATEGORY_TYPES_CLASSES = {
  base: "base",
  active: "active",
};

const getContainerType = (type = CATEGORY_TYPES_CLASSES.base) =>
  ({
    [CATEGORY_TYPES_CLASSES.base]: BaseCategoryContainer,
    [CATEGORY_TYPES_CLASSES.active]: ActiveCategoryContainer,
  }[type]);

const Category = ({ categoryName, categoryType }) => {
  const Container = getContainerType(categoryType);

  return (
    <Container>
      <CategoryNameText>{`${categoryName} (12)`}</CategoryNameText>
    </Container>
  );
};

export default Category;
