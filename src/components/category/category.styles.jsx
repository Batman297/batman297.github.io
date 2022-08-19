import styled from "styled-components";

export const BaseCategoryContainer = styled.div`
  background-color: #e8e8e8;
  border: 1px solid #505050;
  border-radius: 5px;
  padding: 5px 10px;
`;

export const CategoryNameText = styled.p`
  font-size: 14px;
`;

export const ActiveCategoryContainer = styled(BaseCategoryContainer)`
  background-color: #bdbdbd;
`;
