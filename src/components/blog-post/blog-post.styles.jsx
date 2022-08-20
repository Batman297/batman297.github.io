import styled from "styled-components";

export const BlogPostContainer = styled.div`
  width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 1050px) {
    width: 100%;
  }

  p {
    width: 700px;
    margin: 0 auto;
  }
`;

export const Header = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  gap: 10px;

  @media screen and (max-width: 1050px) {
    margin: unset;
  }

  @media screen and (max-width: 900px) {
    margin: unset;
  }
`;

export const PostDate = styled.p`
  font-size: 24px;
  text-align: center;
  color: #8b8b8b;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  line-height: 36px;
  margin: 10px 0;
  text-align: center;
`;
