import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostListContainer = styled.div`
  width: calc(100% - 40px);
  margin: 20px 20px;
`;

export const YearText = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

export const ListContainer = styled.div`
  margin: 10px 0;
  border-bottom: 1px solid #9b9b9b;
`;

export const PostLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #9b9b9b;
  padding: 5px 0;

  :hover {
    padding-left: 15px;
  }
`;

export const PostTitle = styled.p`
  font-size: 18px;
`;

export const PostDate = styled.p`
  font-size: 18px;
  color: #4f4f4f;
`;
