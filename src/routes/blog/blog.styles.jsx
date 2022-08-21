import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  margin: 0 15px;
  margin-top: 25px;

  @media screen and (max-width: 1050px) {
    margin: unset;
  }

  @media screen and (max-width: 900px) {
    margin: unset;
  }
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
