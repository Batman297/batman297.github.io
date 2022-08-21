import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostListContainer = styled.div`
  width: calc(100% - 40px);
  margin: 20px 20px;

  @media screen and (max-width: 1050px) {
    width: 100%;
    margin: 20px 0;
  }

  @media screen and (max-width: 900px) {
    margin: 20px 0;
  }
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
  transition: padding-left 0.5s;

  :hover {
    padding-left: 15px;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;

    :hover {
      padding-left: unset;
    }
  }
`;

export const PostTitle = styled.p`
  font-size: 18px;
  text-align: left;
  width: calc(100% - 220px);

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const PostDate = styled.p`
  text-align: right;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 200px;
  color: #8b8b8b;

  @media screen and (max-width: 750px) {
    margin-bottom: 3px;
    justify-content: flex-start;
  }
`;
