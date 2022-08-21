import {
  ActiveCategoryButton,
  BaseCategoryButton,
} from "./category-button.styles";

export const CATEGORY_TYPES_CLASSES = {
  base: "base",
  active: "active",
};

const getContainerType = (type = CATEGORY_TYPES_CLASSES.base) =>
  ({
    [CATEGORY_TYPES_CLASSES.base]: BaseCategoryButton,
    [CATEGORY_TYPES_CLASSES.active]: ActiveCategoryButton,
  }[type]);

const CategoryButton = ({ categoryObj, categoryType, ...otherProps }) => {
  const { categoryName, categoryLength } = categoryObj;
  const CustomButton = getContainerType(categoryType);

  return (
    <CustomButton
      {...otherProps}
    >{`${categoryName} (${categoryLength})`}</CustomButton>
  );
};

export default CategoryButton;
