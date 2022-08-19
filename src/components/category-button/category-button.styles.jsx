import styled from "styled-components";

export const BaseCategoryButton = styled.button`
  background-color: #e8e8e8;
  border: 1px solid #505050;
  border-radius: 5px;
  padding: 3px 10px;
  cursor: pointer;
`;

export const CategoryNameText = styled.p`
  font-size: 12px;
`;

export const ActiveCategoryButton = styled(BaseCategoryButton)`
  background-color: #bdbdbd;
`;
