import styled from "styled-components";

export const BaseCategoryButton = styled.button`
  font-family: "EB Garamond", "Fira Sans", "Helvetica Neue";
  background-color: #e8e8e8;
  font-size: 12px;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
  padding: 2px 10px;
  color: #505050;
  cursor: pointer;
`;

export const ActiveCategoryButton = styled(BaseCategoryButton)`
  background-color: #bdbdbd;
`;
