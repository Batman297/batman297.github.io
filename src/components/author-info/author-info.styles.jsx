import styled from "styled-components";

export const AuthorInfoContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
`;

export const AuthorInfoTextContainer = styled.div`
  width: 700px;
`;

export const Greeting = styled.p`
  font-size: 35px;
`;

export const Roles = styled.p`
  margin-top: 10px;
  font-size: 57px;
  font-weight: bold;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 30px;
  line-height: 35px;
`;

export const AuthorInfoImageContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;

  img {
    width: 300px;
  }
`;
